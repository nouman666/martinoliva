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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              <Link href="/wedding-bands" className="text-yellow-600 font-medium border-b-2 border-yellow-600 pb-1">Wedding Bands</Link>
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
                <Link href="/wedding-bands" className="text-yellow-600 font-medium border-l-4 border-yellow-600 pl-4">Wedding Bands</Link>
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

      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Users className="w-12 h-12 text-yellow-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Wedding Bands</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete your love story with the perfect wedding bands. Our collection features timeless designs 
            crafted to complement your engagement ring and symbolize your eternal commitment.
          </p>
        </div>
      </div>

      {/* Wedding Band Collections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="women" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 md:mb-12 gap-2 sm:gap-0">
            <TabsTrigger value="women" className="text-base md:text-lg py-3 md:py-4">Women's Bands</TabsTrigger>
            <TabsTrigger value="men" className="text-base md:text-lg py-3 md:py-4">Men's Bands</TabsTrigger>
            <TabsTrigger value="sets" className="text-base md:text-lg py-3 md:py-4">Matching Sets</TabsTrigger>
          </TabsList>

          <TabsContent value="women">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {weddingBands.women.map((band) => (
                <Card key={band.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={band.image || "/placeholder.svg"} 
                        alt={band.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-black mb-2">{band.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <div>Metal: {band.metal}</div>
                        <div>Diamonds: {band.diamonds}</div>
                        <div>Width: {band.width}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-black">{band.price}</span>
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

          <TabsContent value="men">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {weddingBands.men.map((band) => (
                <Card key={band.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={band.image || "/placeholder.svg"} 
                        alt={band.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-black mb-2">{band.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <div>Metal: {band.metal}</div>
                        <div>Diamonds: {band.diamonds}</div>
                        <div>Width: {band.width}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-black">{band.price}</span>
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

          <TabsContent value="sets">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {weddingBands.sets.map((set) => (
                <Card key={set.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={set.image || "/placeholder.svg"} 
                        alt={set.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-black mb-2">{set.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <div>Metal: {set.metal}</div>
                        <div>Diamonds: {set.diamonds}</div>
                        <div>{set.description}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-black">{set.price}</span>
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
