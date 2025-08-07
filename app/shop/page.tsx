'use client'

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Shop</h1>
        <p className="text-stone-600 mb-8">Our jewelry collection will be displayed here.</p>
        <Link href="/">
          <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
