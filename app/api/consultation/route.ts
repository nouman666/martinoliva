// app/api/consultation/route.ts
import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import nodemailer from 'nodemailer'
import { google } from 'googleapis'

function must(name: string) {
  const v = process.env[name]
  if (!v || v.trim() === '') throw new Error(`Missing env var: ${name}`)
  return v
}

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

    // ---- Google Sheets envs
    const SERVICE_EMAIL = must('GOOGLE_SERVICE_ACCOUNT_EMAIL')
    const PRIVATE_KEY   = must('GOOGLE_PRIVATE_KEY').replace(/\\n/g, '\n')

    // Accept either GOOGLE_SHEETS_ID or SHEET_ID (fallback)
    const SHEET_ID = (process.env.GOOGLE_SHEETS_ID || process.env.SHEET_ID || '').trim()
    if (!SHEET_ID) throw new Error('Missing env var: GOOGLE_SHEETS_ID (or SHEET_ID)')

    // 1) Append to Google Sheet
    const jwt = new google.auth.JWT(
      SERVICE_EMAIL,
      undefined,
      PRIVATE_KEY,
      ['https://www.googleapis.com/auth/spreadsheets']
    )
    await jwt.authorize()
    const sheets = google.sheets({ version: 'v4', auth: jwt })

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A1', // change if your tab name is different
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          firstName, lastName, email, phone, projectType, budget, description
        ]]
      }
    })

    // 2) Email notification (optional; uses sensible defaults)
    const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com'
    const EMAIL_PORT = Number(process.env.EMAIL_PORT || 465)
    const EMAIL_USER = must('EMAIL_USER')
    const EMAIL_PASS = must('EMAIL_PASS')
    const NOTIFY_TO  = must('NOTIFY_TO_EMAIL')

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS }
    })

    await transporter.sendMail({
      from: `"Consultations" <${EMAIL_USER}>`,
      to: NOTIFY_TO,
      subject: `New Consultation: ${firstName} ${lastName} (${projectType})`,
      html: `
        <h2>New Bespoke Consultation</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Project Type:</b> ${projectType}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Description:</b><br/>${String(description).replace(/\n/g,'<br/>')}</p>
        <hr/><p><i>${new Date().toLocaleString()}</i></p>
      `
    })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error('consultation error:', e)
    return NextResponse.json({ ok: false, error: e.message || 'Failed' }, { status: 400 })
  }
}
