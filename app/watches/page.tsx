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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-black text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>studio@martinoliva.co.uk</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+44 7565 455568</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow us:</span>
            <a href="https://facebook.com/martinoliva" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4 hover:text-gray-300 cursor-pointer transition-colors" />
            </a>
            <a href="https://instagram.com/martinoliva" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4 hover:text-gray-300 cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex flex-col gap-1 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-yellow-600 transition-all"></div>
              <div className="w-6 h-0.5 bg-yellow-600 transition-all"></div>
              <div className="w-6 h-0.5 bg-yellow-600 transition-all"></div>
            </button>
            
            <div className="flex items-center">
              <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider">
                <span className="text-black">MARTIN OLIVA</span>
                <div className="text-xs text-gray-600 tracking-[0.3em] font-light">FINE JEWELLERY</div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-yellow-600 transition-colors font-medium">Home</Link>
              <Link href="/diamonds" className="text-black hover:text-yellow-600 transition-colors font-medium">Diamonds</Link>
              <Link href="/engagement-rings" className="text-black hover:text-yellow-600 transition-colors font-medium">Engagement Rings</Link>
              <Link href="/wedding-bands" className="text-black hover:text-yellow-600 transition-colors font-medium">Wedding Bands</Link>
              <Link href="/watches" className="text-yellow-600 font-medium border-b-2 border-yellow-600 pb-1">Watches</Link>
              <Link href="/jewellery" className="text-black hover:text-yellow-600 transition-colors font-medium">Jewellery</Link>
              <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium">Bespoke</Link>
              <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium">Services</Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium">Sale</Link>
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
              <Search className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
              <User className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-yellow-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link href="/" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Home</Link>
                <Link href="/diamonds" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Diamonds</Link>
                <Link href="/engagement-rings" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Engagement Rings</Link>
                <Link href="/wedding-bands" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Wedding Bands</Link>
                <Link href="/watches" className="text-yellow-600 font-medium border-l-4 border-yellow-600 pl-4">Watches</Link>
                <Link href="/jewellery" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Jewellery</Link>
                <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Bespoke</Link>
                <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Services</Link>
                <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium border-l-4 border-transparent hover:border-red-600 pl-4">Sale</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Clock className="w-8 h-8 md:w-12 md:h-12 text-yellow-600 mx-auto mb-4 md:mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4">Luxury Timepieces</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our exclusive collection of luxury watches, where Swiss precision meets timeless elegance. 
            Each timepiece is carefully selected for its exceptional craftsmanship and enduring style.
          </p>
        </div>
      </div>

      {/* Watch Collection */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {watches.map((watch) => (
            <Card key={watch.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={watch.image || "/placeholder.svg"} 
                    alt={watch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {watch.isLimited && (
                    <Badge className="absolute top-4 left-4 bg-black text-white">
                      LIMITED EDITION
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{watch.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <div>Brand: {watch.brand}</div>
                    <div>Movement: {watch.movement}</div>
                    <div>Case: {watch.case}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-black">{watch.price}</span>
                    <Button 
                      size="sm"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
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
      <div className="bg-black text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Professional Watch Services
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-300 leading-relaxed">
            Our certified watchmakers provide comprehensive servicing, repairs, and maintenance 
            for all luxury timepieces. Trust your precious watches to our expert care.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-3"
              onClick={() => router.push('/services')}
            >
              WATCH SERVICES
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3"
            >
              BOOK CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
