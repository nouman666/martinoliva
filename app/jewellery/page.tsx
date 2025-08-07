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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              <Link href="/watches" className="text-black hover:text-yellow-600 transition-colors font-medium">Watches</Link>
              <Link href="/jewellery" className="text-yellow-600 font-medium border-b-2 border-yellow-600 pb-1">Jewellery</Link>
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
                <Link href="/watches" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Watches</Link>
                <Link href="/jewellery" className="text-yellow-600 font-medium border-l-4 border-yellow-600 pl-4">Jewellery</Link>
                <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Bespoke</Link>
                <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Services</Link>
                <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium border-l-4 border-transparent hover:border-red-600 pl-4">Sale</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Gem className="w-12 h-12 text-yellow-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black mb-4">Fine Jewellery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our exquisite collection of fine jewellery, featuring necklaces, earrings, and bracelets 
            crafted with the finest diamonds, precious stones, and metals.
          </p>
        </div>
      </div>

      {/* Jewellery Collections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="necklaces" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 md:mb-12 gap-2 sm:gap-0">
            <TabsTrigger value="necklaces" className="text-base md:text-lg py-3 md:py-4">Necklaces</TabsTrigger>
            <TabsTrigger value="earrings" className="text-base md:text-lg py-3 md:py-4">Earrings</TabsTrigger>
            <TabsTrigger value="bracelets" className="text-base md:text-lg py-3 md:py-4">Bracelets</TabsTrigger>
          </TabsList>

          <TabsContent value="necklaces">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {jewellery.necklaces.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-black mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <div>Metal: {item.metal}</div>
                        <div>Stones: {item.stones}</div>
                        <div>Length: {item.length}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-black">{item.price}</span>
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
          </TabsContent>

          <TabsContent value="earrings">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {jewellery.earrings.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-black mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <div>Metal: {item.metal}</div>
                        <div>Stones: {item.stones}</div>
                        <div>Style: {item.style}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-black">{item.price}</span>
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
          </TabsContent>

          <TabsContent value="bracelets">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {jewellery.bracelets.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-black mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <div>Metal: {item.metal}</div>
                        <div>Stones: {item.stones}</div>
                        <div>Length: {item.length}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-black">{item.price}</span>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
