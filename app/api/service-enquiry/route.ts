import { NextResponse } from 'next/server'

// Optional: nodemailer for email
import nodemailer from 'nodemailer'

// Optional: forward to a Google Sheet via webhook (Make/Zapier/Sheet.best/etc.)
const WEBHOOK_URL = process.env.SERVICE_ENQUIRY_WEBHOOK_URL // optional

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // 1) EMAIL (configure SMTP in env)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const html = `
        <h2>New Service Enquiry (Services Page)</h2>
        <p><strong>Category:</strong> ${data.category}</p>
        <p><strong>Item:</strong> ${data.itemTitle} ${data.priceFrom ? `(${data.priceFrom})` : ''}</p>
        <hr/>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || '-'}</p>
        <p><strong>Notes:</strong> ${data.notes || '-'}</p>
        <p><strong>Source:</strong> ${data.sourcePage || '-'}</p>
      `

      await transporter.sendMail({
        from: process.env.FROM_EMAIL || process.env.SMTP_USER,
        to: process.env.TO_EMAIL || 'studio@martinoliva.co.uk',
        subject: `Service enquiry • ${data.category}: ${data.itemTitle}`,
        html,
      })
    }

    // 2) SHEET (send to automation webhook if provided)
    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...data,
        }),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ ok: false, error: 'Bad Request' }, { status: 400 })
  }
}
