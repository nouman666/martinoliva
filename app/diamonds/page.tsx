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

  const diamonds = [
    {
      id: 1,
      name: "Round Brilliant Diamond",
      carat: "1.50",
      cut: "Excellent",
      color: "D",
      clarity: "VVS1",
      price: "£8,500",
      image: "/placeholder-2q1ob.png"
    },
    {
      id: 2,
      name: "Princess Cut Diamond",
      carat: "1.25",
      cut: "Very Good",
      color: "E",
      clarity: "VS1",
      price: "£6,800",
      image: "/princess-cut-diamond.png"
    },
    {
      id: 3,
      name: "Emerald Cut Diamond",
      carat: "2.00",
      cut: "Excellent",
      color: "F",
      clarity: "VVS2",
      price: "£12,200",
      image: "/placeholder-7xfpd.png"
    },
    {
      id: 4,
      name: "Oval Diamond",
      carat: "1.75",
      cut: "Excellent",
      color: "D",
      clarity: "VS2",
      price: "£9,900",
      image: "/oval-diamond.png"
    },
    {
      id: 5,
      name: "Cushion Cut Diamond",
      carat: "1.80",
      cut: "Very Good",
      color: "G",
      clarity: "VS1",
      price: "£8,200",
      image: "/cushion-cut-diamond.png"
    },
    {
      id: 6,
      name: "Pear Shape Diamond",
      carat: "1.60",
      cut: "Excellent",
      color: "E",
      clarity: "VVS1",
      price: "£10,500",
      image: "/pear-shape-diamond.png"
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top Header Bar */}
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

      {/* Main Navigation */}
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
              <li><Link href="/diamonds" className="text-stone-800 hover:text-stone-600 transition-colors border-b-2 border-stone-800 pb-1">DIAMONDS</Link></li>
              <li><Link href="/engagement-rings" className="text-stone-800 hover:text-stone-600 transition-colors">ENGAGEMENT RINGS</Link></li>
              <li><Link href="/wedding-bands" className="text-stone-800 hover:text-stone-600 transition-colors">WEDDING BANDS</Link></li>
              <li><Link href="/watches" className="text-stone-800 hover:text-stone-600 transition-colors">WATCHES</Link></li>
              <li><Link href="/jewellery" className="text-stone-800 hover:text-stone-600 transition-colors">JEWELLERY</Link></li>
              <li><Link href="/bespoke" className="text-stone-800 hover:text-stone-600 transition-colors">BESPOKE</Link></li>
              <li><Link href="/services" className="text-stone-800 hover:text-stone-600 transition-colors">SERVICES</Link></li>
              <li><Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors">SALE ITEMS</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif text-stone-800 mb-4 tracking-wide">Premium Diamonds</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our exceptional collection of certified diamonds, each carefully selected for their brilliance, fire, and scintillation.
          </p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
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
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Diamond Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diamonds.map((diamond) => (
            <Card key={diamond.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={diamond.image || "/placeholder.svg"} 
                    alt={diamond.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">{diamond.name}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-stone-600 mb-4">
                    <div>Carat: {diamond.carat}</div>
                    <div>Cut: {diamond.cut}</div>
                    <div>Color: {diamond.color}</div>
                    <div>Clarity: {diamond.clarity}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-stone-800">{diamond.price}</span>
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
    </div>
  )
}
