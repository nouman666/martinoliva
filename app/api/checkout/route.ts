import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})
//aaa
export async function POST(req: Request) {
  const { items, currency = 'gbp' } = await req.json()

  // Build Stripe line_items
  const line_items = (items || []).map((i: any) => ({
    price_data: {
      currency,
      product_data: {
        name: i.name,
        images: i.image ? [i.image] : [],
      },
      unit_amount: Number(i.unit_amount), // in pence
    },
    quantity: Number(i.quantity) || 1,
  }))

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items,
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/checkout/cancel`,
    // Optional: Let Stripe collect shipping address
    shipping_address_collection: { allowed_countries: ['GB', 'IE', 'US', 'CA', 'AU', 'NZ', 'FR', 'DE', 'ES', 'IT'] },
    // Optional: send metadata for your own order lookup
    metadata: { source: 'martin-oliva-web' },
  })

  return NextResponse.json({ id: session.id, url: session.url })
}

