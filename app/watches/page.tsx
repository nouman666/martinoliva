'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, Clock } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WatchesPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)

  const watches = [
    {
      id: 1,
      name: "Classic Dress Watch",
      brand: "Martin Oliva",
      movement: "Swiss Automatic",
      case: "18k Gold, 40mm",
      price: "£8,500",
      isLimited: false,
      image: "/classic-dress-watch.png"
    },
    {
      id: 2,
      name: "Diamond Bezel Ladies",
      brand: "Martin Oliva",
      movement: "Swiss Quartz",
      case: "Steel & Diamonds, 32mm",
      price: "£12,200",
      isLimited: false,
      image: "/diamond-bezel-ladies-watch.png"
    },
    {
      id: 3,
      name: "Limited Edition Chronograph",
      brand: "Martin Oliva",
      movement: "Swiss Chronograph",
      case: "Platinum, 42mm",
      price: "£25,000",
      isLimited: true,
      image: "/limited-chronograph.png"
    },
    {
      id: 4,
      name: "Vintage Inspired",
      brand: "Martin Oliva",
      movement: "Manual Wind",
      case: "Rose Gold, 38mm",
      price: "£6,800",
      isLimited: false,
      image: "/vintage-inspired-watch.png"
    },
    {
      id: 5,
      name: "Sports Luxury",
      brand: "Martin Oliva",
      movement: "Swiss Automatic",
      case: "Steel & Ceramic, 44mm",
      price: "£4,200",
      isLimited: false,
      image: "/sports-luxury-watch.png"
    },
    {
      id: 6,
      name: "Elegant Mother of Pearl",
      brand: "Martin Oliva",
      movement: "Swiss Quartz",
      case: "White Gold & Diamonds, 30mm",
      price: "£15,500",
      isLimited: false,
      image: "/mother-of-pearl-watch.png"
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header - Same structure */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:studio@martinoliva.co.uk" className="flex items-center gap-2 hover:text-stone-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>studio@martinoliva.co.uk</span>
            </a>
            <a href="tel:+447565455568" className="flex items-center gap-2 hover:text-stone-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+44 7565 455568</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com/martinoliva" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4 hover:text-stone-300 cursor-pointer transition-colors" />
            </a>
            <a href="https://instagram.com/martinoliva" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4 hover:text-stone-300 cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Search className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-800 transition-colors" />
            
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-serif tracking-wider">
                <div className="flex flex-col items-center">
                  <div className="relative w-12 h-12 mb-2">
                    <div className="w-12 h-12 border-2 border-stone-800 rounded-full flex items-center justify-center bg-white">
                      <div className="relative">
                        <div className="w-6 h-0.5 bg-stone-800"></div>
                        <div className="w-0.5 h-6 bg-stone-800 absolute top-[-12px] left-[11px]"></div>
                      </div>
                    </div>
                  </div>
                  <span className="text-stone-800 font-bold text-lg tracking-[0.1em]">MARTIN OLIVA</span>
                  <span className="text-xs tracking-[0.3em] text-stone-600 font-light">LONDON</span>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <User className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-800 transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-800 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-stone-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              </div>
            </div>
          </div>

          <nav className="mt-8">
            <ul className="flex justify-center items-center gap-8 text-sm font-medium tracking-wider">
              <li><Link href="/" className="text-stone-800 hover:text-stone-600 transition-colors">HOME</Link></li>
              <li><Link href="/diamonds" className="text-stone-800 hover:text-stone-600 transition-colors">DIAMONDS</Link></li>
              <li><Link href="/engagement-rings" className="text-stone-800 hover:text-stone-600 transition-colors">ENGAGEMENT RINGS</Link></li>
              <li><Link href="/wedding-bands" className="text-stone-800 hover:text-stone-600 transition-colors">WEDDING BANDS</Link></li>
              <li><Link href="/watches" className="text-stone-800 hover:text-stone-600 transition-colors border-b-2 border-stone-800 pb-1">WATCHES</Link></li>
              <li><Link href="/jewellery" className="text-stone-800 hover:text-stone-600 transition-colors">JEWELLERY</Link></li>
              <li><Link href="/bespoke" className="text-stone-800 hover:text-stone-600 transition-colors">BESPOKE</Link></li>
              <li><Link href="/services" className="text-stone-800 hover:text-stone-600 transition-colors">SERVICES</Link></li>
              <li><Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors">SALE ITEMS</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Clock className="w-12 h-12 text-stone-600 mx-auto mb-6" />
          <h1 className="text-4xl font-serif text-stone-800 mb-4 tracking-wide">Luxury Timepieces</h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exclusive collection of luxury watches, where Swiss precision meets timeless elegance. 
            Each timepiece is carefully selected for its exceptional craftsmanship and enduring style.
          </p>
        </div>
      </div>

      {/* Watch Collection */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <Card key={watch.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={watch.image || "/placeholder.svg"} 
                    alt={watch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {watch.isLimited && (
                    <Badge className="absolute top-4 left-4 bg-stone-800 text-white">
                      LIMITED EDITION
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">{watch.name}</h3>
                  <div className="space-y-1 text-sm text-stone-600 mb-4">
                    <div>Brand: {watch.brand}</div>
                    <div>Movement: {watch.movement}</div>
                    <div>Case: {watch.case}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-stone-800">{watch.price}</span>
                    <Button 
                      size="sm"
                      className="bg-stone-900 hover:bg-stone-800 text-white"
                      onClick={() => setCartItems(cartItems + 1)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Watch Services */}
      <div className="bg-stone-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6 tracking-wide">
            Professional Watch Services
          </h2>
          <p className="text-lg mb-8 text-stone-300 leading-relaxed">
            Our certified watchmakers provide comprehensive servicing, repairs, and maintenance 
            for all luxury timepieces. Trust your precious watches to our expert care.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              className="bg-white text-stone-800 hover:bg-stone-100 px-8 py-3"
              onClick={() => router.push('/services')}
            >
              WATCH SERVICES
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-800 px-8 py-3"
            >
              BOOK CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
