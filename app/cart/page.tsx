'use client'

import Link from "next/link"
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="text-center">
        <ShoppingBag className="w-16 h-16 text-stone-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Shopping Cart</h1>
        <p className="text-stone-600 mb-8">Your cart is currently empty.</p>
        <Link href="/">
          <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}
