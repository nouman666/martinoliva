'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, Filter, Grid, List } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DiamondsPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)
  const [viewMode, setViewMode] = useState('grid')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const diamonds = [
    {
      id: 1,
      name: "Round Brilliant Diamond",
      carat: "1.50",
      cut: "Excellent",
      color: "D",
      clarity: "VVS1",
      price: "£8,500",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Princess Cut Diamond",
      carat: "1.25",
      cut: "Very Good",
      color: "E",
      clarity: "VS1",
      price: "£6,800",
      image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Emerald Cut Diamond",
      carat: "2.00",
      cut: "Excellent",
      color: "F",
      clarity: "VVS2",
      price: "£12,200",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Oval Diamond",
      carat: "1.75",
      cut: "Excellent",
      color: "D",
      clarity: "VS2",
      price: "£9,900",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Cushion Cut Diamond",
      carat: "1.80",
      cut: "Very Good",
      color: "G",
      clarity: "VS1",
      price: "£8,200",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Pear Shape Diamond",
      carat: "1.60",
      cut: "Excellent",
      color: "E",
      clarity: "VVS1",
      price: "£10,500",
      image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
            <Facebook className="w-4 h-4 hover:text-gray-300 cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 hover:text-gray-300 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
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

            <Link href="/" className="flex items-center">
              <div className="text-xl md:text-2xl font-bold tracking-wider">
                <span className="text-black">MARTIN OLIVA</span>
                <div className="text-xs text-gray-600 tracking-[0.3em] font-light">FINE JEWELLERY</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-yellow-600 transition-colors font-medium">Home</Link>
              <Link href="/diamonds" className="text-yellow-600 font-medium border-b-2 border-yellow-600 pb-1">Diamonds</Link>
              <Link href="/engagement-rings" className="text-black hover:text-yellow-600 transition-colors font-medium">Engagement Rings</Link>
              <Link href="/wedding-bands" className="text-black hover:text-yellow-600 transition-colors font-medium">Wedding Bands</Link>
              <Link href="/watches" className="text-black hover:text-yellow-600 transition-colors font-medium">Watches</Link>
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
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-yellow-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link href="/" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Home</Link>
                <Link href="/diamonds" className="text-yellow-600 font-medium border-l-4 border-yellow-600 pl-4">Diamonds</Link>
                <Link href="/engagement-rings" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Engagement Rings</Link>
                <Link href="/wedding-bands" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Wedding Bands</Link>
                <Link href="/watches" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Watches</Link>
                <Link href="/jewellery" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Jewellery</Link>
                <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Bespoke</Link>
                <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Services</Link>
                <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium border-l-4 border-transparent hover:border-red-600 pl-4">Sale</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Premium Diamonds</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our exceptional collection of certified diamonds, each carefully selected for their brilliance, fire, and scintillation.
          </p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Cut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cuts</SelectItem>
                <SelectItem value="round">Round</SelectItem>
                <SelectItem value="princess">Princess</SelectItem>
                <SelectItem value="emerald">Emerald</SelectItem>
                <SelectItem value="oval">Oval</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Carat" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Carats</SelectItem>
                <SelectItem value="1-1.5">1.0 - 1.5</SelectItem>
                <SelectItem value="1.5-2">1.5 - 2.0</SelectItem>
                <SelectItem value="2+">2.0+</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="price-low">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="carat">Carat Weight</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="bg-black text-white hover:bg-gray-800"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="bg-black text-white hover:bg-gray-800"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Diamond Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diamonds.map((diamond) => (
            <Card key={diamond.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src={diamond.image || "/placeholder.svg"} 
                    alt={diamond.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">{diamond.name}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div>Carat: {diamond.carat}</div>
                    <div>Cut: {diamond.cut}</div>
                    <div>Color: {diamond.color}</div>
                    <div>Clarity: {diamond.clarity}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-black">{diamond.price}</span>
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
    </div>
  )
}
