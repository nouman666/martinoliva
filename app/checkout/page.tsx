'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useCart } from '@/app/cart/page' // same hook you’re already using in CartDrawer

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clear } = useCart()
  const [loading, setLoading] = useState(false)
  const currency = 'gbp'

  const handleCheckout = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currency,
          items: items.map(i => ({
            name: i.name,
            image: i.image,
            // Stripe needs integer minor units (pence). If your price is already number in GBP:
            unit_amount: Math.round(Number(i.price) * 100), // e.g. 1299 -> £12.99
            quantity: i.qty
          })),
        })
      })
      const { url } = await res.json()
      if (url) window.location.href = url
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {items.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <p className="mb-4">Your cart is empty.</p>
          <Link href="/"><Button>Continue Shopping</Button></Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping & Billing (collect now, pay on Stripe) */}
          <div className="lg:col-span-2 space-y-6">
            <section className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className="border p-3 rounded" placeholder="First name" />
                <input className="border p-3 rounded" placeholder="Last name" />
                <input className="border p-3 rounded sm:col-span-2" placeholder="Address line 1" />
                <input className="border p-3 rounded sm:col-span-2" placeholder="Address line 2 (optional)" />
                <input className="border p-3 rounded" placeholder="City" />
                <input className="border p-3 rounded" placeholder="Postcode" />
                <input className="border p-3 rounded" placeholder="Country" defaultValue="United Kingdom" />
                <input className="border p-3 rounded sm:col-span-2" placeholder="Email for receipt" />
              </div>
              <p className="text-xs text-gray-500 mt-3">
                We’ll pass your email to Stripe for the receipt. Card entry happens securely on Stripe’s page.
              </p>
            </section>

            <section className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <p className="text-sm text-gray-600 mb-2">
                Pay by card on our secure Stripe checkout. We never see or store your card details.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <img alt="visa" src="https://static.stripe.com/assets/payment_method_icons/visa.svg" className="h-5" />
                <img alt="mc" src="https://static.stripe.com/assets/payment_method_icons/mastercard.svg" className="h-5" />
                <img alt="amex" src="https://static.stripe.com/assets/payment_method_icons/amex.svg" className="h-5" />
                <span>… and more</span>
              </div>
            </section>
          </div>

          {/* Summary */}
          <aside className="border rounded-lg p-4 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="divide-y">
              {items.map(it => (
                <li key={it.id} className="py-3 flex items-center gap-3">
                  <img src={it.image || '/placeholder.svg'} className="w-14 h-14 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-medium">{it.name}</div>
                    <div className="text-xs text-gray-500">Qty {it.qty}</div>
                  </div>
                  <div className="font-semibold">£{(Number(it.price) * it.qty).toLocaleString()}</div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>Subtotal</span>
              <span>£{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-600">
              <span>Shipping</span>
              <span>£0.00</span>
            </div>
            <div className="flex justify-between mt-3 text-lg font-semibold">
              <span>Total</span>
              <span>£{subtotal.toLocaleString()}</span>
            </div>

            <Button
              onClick={handleCheckout}
              className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              disabled={loading}
            >
              {loading ? 'Redirecting…' : 'Pay securely with Stripe'}
            </Button>

            <button
              onClick={clear}
              className="w-full mt-2 text-sm text-gray-500 underline"
            >
              Clear cart
            </button>
          </aside>
        </div>
      )}
    </div>
  )
}
