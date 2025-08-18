// app/api/consultation/route.ts
import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import nodemailer from 'nodemailer'
import { google } from 'googleapis'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const firstName   = String(body.firstName || '')
    const lastName    = String(body.lastName  || '')
    const email       = String(body.email     || '')
    const phone       = String(body.phone     || '')
    const projectType = String(body.projectType || '')
    const budget      = String(body.budget    || '')
    const description = String(body.description || '')

    // 1) Append to Google Sheet (Sheets API only)
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      undefined,
      (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    )
    await jwt.authorize()
    const sheets = google.sheets({ version: 'v4', auth: jwt })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID!,
      range: 'Sheet1!A1', // change if your tab name is different
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          firstName, lastName, email, phone, projectType, budget, description
        ]]
      }
    })

    // 2) Email you the submission
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,            // e.g. smtp.gmail.com
      port: Number(process.env.EMAIL_PORT || 465),
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    })

    await transporter.sendMail({
      from: `"Consultations" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_TO_EMAIL, // your inbox
      subject: `New Consultation: ${firstName} ${lastName} (${projectType})`,
      html: `
        <h2>New Bespoke Consultation</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Project Type:</b> ${projectType}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Description:</b><br/>${description.replace(/\n/g,'<br/>')}</p>
        <hr/><p><i>${new Date().toLocaleString()}</i></p>
      `
    })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error('consultation error:', e)
    return NextResponse.json({ ok: false, error: e.message || 'Failed' }, { status: 400 })
  }
}
