'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, Heart, Users } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WeddingBandsPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)

  const weddingBands = {
    women: [
      {
        id: 1,
        name: "Classic Diamond Eternity",
        metal: "Platinum",
        diamonds: "0.50ct Total",
        width: "2.5mm",
        price: "£2,800",
        image: "/diamond-eternity-band.png"
      },
      {
        id: 2,
        name: "Vintage Milgrain Band",
        metal: "18k Yellow Gold",
        diamonds: "0.25ct Total",
        width: "3mm",
        price: "£1,650",
        image: "/vintage-milgrain-band.png"
      },
      {
        id: 3,
        name: "Modern Curved Band",
        metal: "18k White Gold",
        diamonds: "0.35ct Total",
        width: "2mm",
        price: "£2,200",
        image: "/modern-curved-band.png"
      }
    ],
    men: [
      {
        id: 4,
        name: "Classic Comfort Fit",
        metal: "Platinum",
        diamonds: "None",
        width: "6mm",
        price: "£1,200",
        image: "/mens-comfort-fit-band.png"
      },
      {
        id: 5,
        name: "Brushed Titanium",
        metal: "Titanium",
        diamonds: "None",
        width: "7mm",
        price: "£450",
        image: "/brushed-titanium-band.png"
      },
      {
        id: 6,
        name: "Diamond Channel Set",
        metal: "18k White Gold",
        diamonds: "0.75ct Total",
        width: "8mm",
        price: "£3,500",
        image: "/mens-diamond-channel-band.png"
      }
    ],
    sets: [
      {
        id: 7,
        name: "His & Hers Classic Set",
        metal: "Platinum",
        diamonds: "0.25ct (Hers)",
        description: "Matching comfort fit bands",
        price: "£2,400",
        image: "/his-hers-classic-set.png"
      },
      {
        id: 8,
        name: "Modern Matching Set",
        metal: "18k Rose Gold",
        diamonds: "0.40ct (Hers)",
        description: "Contemporary design",
        price: "£2,850",
        image: "/modern-matching-set.png"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header - Same as other pages */}
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
              <li><Link href="/wedding-bands" className="text-stone-800 hover:text-stone-600 transition-colors border-b-2 border-stone-800 pb-1">WEDDING BANDS</Link></li>
              <li><Link href="/watches" className="text-stone-800 hover:text-stone-600 transition-colors">WATCHES</Link></li>
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
          <Users className="w-12 h-12 text-stone-600 mx-auto mb-6" />
          <h1 className="text-4xl font-serif text-stone-800 mb-4 tracking-wide">Wedding Bands</h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Complete your love story with the perfect wedding bands. Our collection features timeless designs 
            crafted to complement your engagement ring and symbolize your eternal commitment.
          </p>
        </div>
      </div>

      {/* Wedding Band Collections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="women" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="women" className="text-lg py-4">Women's Bands</TabsTrigger>
            <TabsTrigger value="men" className="text-lg py-4">Men's Bands</TabsTrigger>
            <TabsTrigger value="sets" className="text-lg py-4">Matching Sets</TabsTrigger>
          </TabsList>

          <TabsContent value="women">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weddingBands.women.map((band) => (
                <Card key={band.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={band.image || "/placeholder.svg"} 
                        alt={band.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{band.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Metal: {band.metal}</div>
                        <div>Diamonds: {band.diamonds}</div>
                        <div>Width: {band.width}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-stone-800">{band.price}</span>
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
          </TabsContent>

          <TabsContent value="men">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weddingBands.men.map((band) => (
                <Card key={band.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={band.image || "/placeholder.svg"} 
                        alt={band.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{band.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Metal: {band.metal}</div>
                        <div>Diamonds: {band.diamonds}</div>
                        <div>Width: {band.width}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-stone-800">{band.price}</span>
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
          </TabsContent>

          <TabsContent value="sets">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {weddingBands.sets.map((set) => (
                <Card key={set.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={set.image || "/placeholder.svg"} 
                        alt={set.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{set.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Metal: {set.metal}</div>
                        <div>Diamonds: {set.diamonds}</div>
                        <div>{set.description}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-stone-800">{set.price}</span>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
