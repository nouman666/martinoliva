'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, Gem } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function JewelleryPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)

  const jewellery = {
    necklaces: [
      {
        id: 1,
        name: "Diamond Tennis Necklace",
        metal: "18k White Gold",
        stones: "5.0ct Diamonds",
        length: "16 inches",
        price: "£15,500",
        image: "/diamond-tennis-necklace.png"
      },
      {
        id: 2,
        name: "Pearl & Diamond Pendant",
        metal: "18k Yellow Gold",
        stones: "Tahitian Pearl, 0.25ct Diamond",
        length: "18 inches",
        price: "£3,200",
        image: "/pearl-diamond-pendant.png"
      }
    ],
    earrings: [
      {
        id: 3,
        name: "Diamond Stud Earrings",
        metal: "Platinum",
        stones: "2.0ct Total Diamond Weight",
        style: "Classic Studs",
        price: "£8,500",
        image: "/diamond-stud-earrings.png"
      },
      {
        id: 4,
        name: "Sapphire Drop Earrings",
        metal: "18k White Gold",
        stones: "Ceylon Sapphires, 0.50ct Diamonds",
        style: "Drop Style",
        price: "£6,800",
        image: "/sapphire-drop-earrings.png"
      }
    ],
    bracelets: [
      {
        id: 5,
        name: "Diamond Line Bracelet",
        metal: "Platinum",
        stones: "7.0ct Total Diamond Weight",
        length: "7 inches",
        price: "£22,000",
        image: "/diamond-line-bracelet.png"
      },
      {
        id: 6,
        name: "Gold Chain Bracelet",
        metal: "18k Rose Gold",
        stones: "None",
        length: "7.5 inches",
        price: "£1,850",
        image: "/gold-chain-bracelet.png"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
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
              <li><Link href="/watches" className="text-stone-800 hover:text-stone-600 transition-colors">WATCHES</Link></li>
              <li><Link href="/jewellery" className="text-stone-800 hover:text-stone-600 transition-colors border-b-2 border-stone-800 pb-1">JEWELLERY</Link></li>
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
          <Gem className="w-12 h-12 text-stone-600 mx-auto mb-6" />
          <h1 className="text-4xl font-serif text-stone-800 mb-4 tracking-wide">Fine Jewellery</h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Explore our exquisite collection of fine jewellery, featuring necklaces, earrings, and bracelets 
            crafted with the finest diamonds, precious stones, and metals.
          </p>
        </div>
      </div>

      {/* Jewellery Collections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="necklaces" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="necklaces" className="text-lg py-4">Necklaces</TabsTrigger>
            <TabsTrigger value="earrings" className="text-lg py-4">Earrings</TabsTrigger>
            <TabsTrigger value="bracelets" className="text-lg py-4">Bracelets</TabsTrigger>
          </TabsList>

          <TabsContent value="necklaces">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jewellery.necklaces.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Metal: {item.metal}</div>
                        <div>Stones: {item.stones}</div>
                        <div>Length: {item.length}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-stone-800">{item.price}</span>
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

          <TabsContent value="earrings">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jewellery.earrings.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Metal: {item.metal}</div>
                        <div>Stones: {item.stones}</div>
                        <div>Style: {item.style}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-stone-800">{item.price}</span>
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

          <TabsContent value="bracelets">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jewellery.bracelets.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Metal: {item.metal}</div>
                        <div>Stones: {item.stones}</div>
                        <div>Length: {item.length}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-stone-800">{item.price}</span>
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
