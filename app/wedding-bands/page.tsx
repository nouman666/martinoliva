'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, Users } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WeddingBandsPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const weddingBands = {
    women: [
      { id: 1, name: "Classic Diamond Eternity", metal: "Platinum", diamonds: "0.50ct Total", width: "2.5mm", price: "£2,800", image: "/diamond-eternity-band.png" },
      { id: 2, name: "Vintage Milgrain Band", metal: "18k Yellow Gold", diamonds: "0.25ct Total", width: "3mm", price: "£1,650", image: "/vintage-milgrain-band.png" },
      { id: 3, name: "Modern Curved Band", metal: "18k White Gold", diamonds: "0.35ct Total", width: "2mm", price: "£2,200", image: "/modern-curved-band.png" }
    ],
    men: [
      { id: 4, name: "Classic Comfort Fit", metal: "Platinum", diamonds: "None", width: "6mm", price: "£1,200", image: "/mens-comfort-fit-band.png" },
      { id: 5, name: "Brushed Titanium", metal: "Titanium", diamonds: "None", width: "7mm", price: "£450", image: "/brushed-titanium-band.png" },
      { id: 6, name: "Diamond Channel Set", metal: "18k White Gold", diamonds: "0.75ct Total", width: "8mm", price: "£3,500", image: "/mens-diamond-channel-band.png" }
    ],
    sets: [
      { id: 7, name: "His & Hers Classic Set", metal: "Platinum", diamonds: "0.25ct (Hers)", description: "Matching comfort fit bands", price: "£2,400", image: "/his-hers-classic-set.png" },
      { id: 8, name: "Modern Matching Set", metal: "18k Rose Gold", diamonds: "0.40ct (Hers)", description: "Contemporary design", price: "£2,850", image: "/modern-matching-set.png" }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar — MATCH DIAMONDS */}
      <div className="bg-gradient-to-r from-black to-yellow-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:studio@martinoliva.co.uk" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>studio@martinoliva.co.uk</span>
            </a>
            <a href="tel:+447565455568" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+44 7565 455568</span>
            </a>
          </d
