import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export const config = { api: { bodyParser: false } } // (Next.js API, not needed in App Router, but keeps intent clear)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature')!
  const buf = await req.arrayBuffer()
  const text = Buffer.from(buf).toString('utf8')

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      text,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 })
  }

  // Handle events
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    // TODO: mark order as paid in your DB, send confirmation, fulfill, etc.
    // Use session.id, session.amount_total, session.customer_details, etc.
  }

  return NextResponse.json({ received: true })
}
