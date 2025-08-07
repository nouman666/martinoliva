'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, Tag, Clock, Percent } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SalePage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)

  const saleItems = {
    rings: [
      {
        id: 1,
        name: "Classic Solitaire Diamond Ring",
        category: "Engagement Ring",
        originalPrice: "£4,500",
        salePrice: "£3,200",
        discount: "29%",
        metal: "18k White Gold",
        diamond: "1.0ct Round Brilliant",
        reason: "Display Model",
        timeLeft: "3 days",
        image: "/sale-solitaire-ring.png"
      },
      {
        id: 2,
        name: "Vintage Art Deco Ring",
        category: "Cocktail Ring",
        originalPrice: "£2,800",
        salePrice: "£1,950",
        discount: "30%",
        metal: "Platinum",
        diamond: "0.75ct Emerald Cut",
        reason: "End of Line",
        timeLeft: "1 week",
        image: "/sale-art-deco-ring.png"
      },
      {
        id: 3,
        name: "Three Stone Anniversary Ring",
        category: "Anniversary Ring",
        originalPrice: "£6,200",
        salePrice: "£4,650",
        discount: "25%",
        metal: "18k Yellow Gold",
        diamond: "1.5ct Total Weight",
        reason: "Seasonal Sale",
        timeLeft: "5 days",
        image: "/sale-three-stone-ring.png"
      }
    ],
    jewellery: [
      {
        id: 4,
        name: "Diamond Tennis Bracelet",
        category: "Bracelet",
        originalPrice: "£8,500",
        salePrice: "£6,200",
        discount: "27%",
        metal: "18k White Gold",
        diamond: "3.0ct Total Weight",
        reason: "Clearance",
        timeLeft: "2 days",
        image: "/sale-tennis-bracelet.png"
      },
      {
        id: 5,
        name: "Pearl & Diamond Earrings",
        category: "Earrings",
        originalPrice: "£1,850",
        salePrice: "£1,295",
        discount: "30%",
        metal: "18k Rose Gold",
        diamond: "South Sea Pearls, 0.40ct Diamonds",
        reason: "Display Model",
        timeLeft: "1 week",
        image: "/sale-pearl-earrings.png"
      },
      {
        id: 6,
        name: "Sapphire Pendant Necklace",
        category: "Necklace",
        originalPrice: "£3,200",
        salePrice: "£2,240",
        discount: "30%",
        metal: "Platinum",
        diamond: "2.0ct Ceylon Sapphire, 0.25ct Diamonds",
        reason: "End of Line",
        timeLeft: "4 days",
        image: "/sale-sapphire-necklace.png"
      }
    ],
    watches: [
      {
        id: 7,
        name: "Classic Dress Watch",
        category: "Men's Watch",
        originalPrice: "£4,200",
        salePrice: "£2,950",
        discount: "30%",
        metal: "18k Gold Case",
        diamond: "Swiss Automatic Movement",
        reason: "Previous Season",
        timeLeft: "6 days",
        image: "/sale-dress-watch.png"
      },
      {
        id: 8,
        name: "Diamond Bezel Ladies Watch",
        category: "Ladies Watch",
        originalPrice: "£6,800",
        salePrice: "£4,760",
        discount: "30%",
        metal: "Steel & Diamond Bezel",
        diamond: "Swiss Quartz, 1.0ct Diamonds",
        reason: "Display Model",
        timeLeft: "2 weeks",
        image: "/sale-ladies-watch.png"
      }
    ]
  }

  const allSaleItems = [...saleItems.rings, ...saleItems.jewellery, ...saleItems.watches]

  const calculateSavings = (original: string, sale: string) => {
    const originalNum = parseInt(original.replace(/[£,]/g, ''))
    const saleNum = parseInt(sale.replace(/[£,]/g, ''))
    return `£${(originalNum - saleNum).toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top Header Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-3 md:gap-6">
            <a href="mailto:studio@martinoliva.co.uk" className="flex items-center gap-1 md:gap-2 hover:text-stone-300 transition-colors">
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">studio@martinoliva.co.uk</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a href="tel:+447565455568" className="flex items-center gap-1 md:gap-2 hover:text-stone-300 transition-colors">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">+44 7565 455568</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://facebook.com/martinoliva" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-3 h-3 md:w-4 md:h-4 hover:text-stone-300 cursor-pointer transition-colors" />
            </a>
            <a href="https://instagram.com/martinoliva" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-3 h-3 md:w-4 md:h-4 hover:text-stone-300 cursor-pointer transition-colors" />
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
                  <div className="relative w-8 h-8 md:w-12 md:h-12 mb-1 md:mb-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-stone-800 rounded-full flex items-center justify-center bg-white">
                      <div className="relative">
                        <div className="w-4 h-0.5 md:w-6 md:h-0.5 bg-stone-800"></div>
                        <div className="w-0.5 h-4 md:w-0.5 md:h-6 bg-stone-800 absolute top-[-8px] md:top-[-12px] left-[7px] md:left-[11px]"></div>
                      </div>
                    </div>
                  </div>
                  <span className="text-stone-800 font-bold text-sm md:text-lg tracking-[0.1em]">MARTIN OLIVA</span>
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

          {/* Mobile Navigation */}
          <nav className="mt-6 md:mt-8">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex justify-center items-center gap-8 text-sm font-medium tracking-wider">
              <li><Link href="/" className="text-stone-800 hover:text-stone-600 transition-colors">HOME</Link></li>
              <li><Link href="/diamonds" className="text-stone-800 hover:text-stone-600 transition-colors">DIAMONDS</Link></li>
              <li><Link href="/engagement-rings" className="text-stone-800 hover:text-stone-600 transition-colors">ENGAGEMENT RINGS</Link></li>
              <li><Link href="/wedding-bands" className="text-stone-800 hover:text-stone-600 transition-colors">WEDDING BANDS</Link></li>
              <li><Link href="/watches" className="text-stone-800 hover:text-stone-600 transition-colors">WATCHES</Link></li>
              <li><Link href="/jewellery" className="text-stone-800 hover:text-stone-600 transition-colors">JEWELLERY</Link></li>
              <li><Link href="/bespoke" className="text-stone-800 hover:text-stone-600 transition-colors">BESPOKE</Link></li>
              <li><Link href="/services" className="text-stone-800 hover:text-stone-600 transition-colors">SERVICES</Link></li>
              <li><Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors border-b-2 border-red-600 pb-1">SALE ITEMS</Link></li>
            </ul>
            
            {/* Mobile Navigation - Horizontal Scroll */}
            <div className="lg:hidden overflow-x-auto">
              <ul className="flex gap-6 text-xs font-medium tracking-wider whitespace-nowrap pb-2">
                <li><Link href="/" className="text-stone-800 hover:text-stone-600 transition-colors">HOME</Link></li>
                <li><Link href="/diamonds" className="text-stone-800 hover:text-stone-600 transition-colors">DIAMONDS</Link></li>
                <li><Link href="/engagement-rings" className="text-stone-800 hover:text-stone-600 transition-colors">ENGAGEMENT</Link></li>
                <li><Link href="/wedding-bands" className="text-stone-800 hover:text-stone-600 transition-colors">WEDDING</Link></li>
                <li><Link href="/watches" className="text-stone-800 hover:text-stone-600 transition-colors">WATCHES</Link></li>
                <li><Link href="/jewellery" className="text-stone-800 hover:text-stone-600 transition-colors">JEWELLERY</Link></li>
                <li><Link href="/bespoke" className="text-stone-800 hover:text-stone-600 transition-colors">BESPOKE</Link></li>
                <li><Link href="/services" className="text-stone-800 hover:text-stone-600 transition-colors">SERVICES</Link></li>
                <li><Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors border-b-2 border-red-600 pb-1">SALE</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Tag className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-4 md:mb-6" />
          <h1 className="text-2xl md:text-4xl font-serif mb-3 md:mb-4 tracking-wide">Exclusive Sale</h1>
          <p className="text-base md:text-xl mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed px-4">
            Discover exceptional savings on our finest jewelry and timepieces. 
            Limited time offers on selected pieces from our luxury collection.
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-8 text-sm md:text-lg">
            <div className="flex items-center gap-2">
              <Percent className="w-4 h-4 md:w-5 md:h-5" />
              <span>Up to 30% Off</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Limited Time Only</span>
              <span className="sm:hidden">Limited Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sale Banner */}
      <div className="bg-stone-800 text-white py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm md:text-lg font-semibold">
            <span className="hidden sm:inline">🔥 FLASH SALE: Additional 10% off when you buy 2 or more items | Use code: SAVE10</span>
            <span className="sm:hidden">🔥 Extra 10% off 2+ items | Code: SAVE10</span>
          </p>
        </div>
      </div>

      {/* Sale Items */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 md:mb-12">
            <TabsTrigger value="all" className="text-sm md:text-lg py-3 md:py-4">All Items</TabsTrigger>
            <TabsTrigger value="rings" className="text-sm md:text-lg py-3 md:py-4">Rings</TabsTrigger>
            <TabsTrigger value="jewellery" className="text-sm md:text-lg py-3 md:py-4 hidden md:block">Jewellery</TabsTrigger>
            <TabsTrigger value="jewellery" className="text-sm md:text-lg py-3 md:py-4 md:hidden">Jewelry</TabsTrigger>
            <TabsTrigger value="watches" className="text-sm md:text-lg py-3 md:py-4">Watches</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {allSaleItems.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-red-200">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-red-600 text-white font-bold">
                          -{item.discount}
                        </Badge>
                        <Badge className="bg-stone-800 text-white text-xs">
                          {item.reason}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-stone-800 border-stone-300">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.timeLeft}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs text-stone-600 border-stone-300">
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Metal: {item.metal}</div>
                        <div>Details: {item.diamond}</div>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-red-600">{item.salePrice}</span>
                          <span className="text-sm text-stone-500 line-through">{item.originalPrice}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-stone-600">You Save</div>
                          <div className="text-lg font-bold text-green-600">
                            {calculateSavings(item.originalPrice, item.salePrice)}
                          </div>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => setCartItems(cartItems + 1)}
                      >
                        Add to Cart - {item.salePrice}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rings">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {saleItems.rings.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-red-200">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-red-600 text-white font-bold">
                          -{item.discount}
                        </Badge>
                        <Badge className="bg-stone-800 text-white text-xs">
                          {item.reason}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-stone-800 border-stone-300">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.timeLeft}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs text-stone-600 border-stone-300">
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Metal: {item.metal}</div>
                        <div>Diamond: {item.diamond}</div>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-red-600">{item.salePrice}</span>
                          <span className="text-sm text-stone-500 line-through">{item.originalPrice}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-stone-600">You Save</div>
                          <div className="text-lg font-bold text-green-600">
                            {calculateSavings(item.originalPrice, item.salePrice)}
                          </div>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => setCartItems(cartItems + 1)}
                      >
                        Add to Cart - {item.salePrice}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jewellery">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {saleItems.jewellery.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-red-200">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-red-600 text-white font-bold">
                          -{item.discount}
                        </Badge>
                        <Badge className="bg-stone-800 text-white text-xs">
                          {item.reason}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-stone-800 border-stone-300">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.timeLeft}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs text-stone-600 border-stone-300">
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Metal: {item.metal}</div>
                        <div>Details: {item.diamond}</div>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-red-600">{item.salePrice}</span>
                          <span className="text-sm text-stone-500 line-through">{item.originalPrice}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-stone-600">You Save</div>
                          <div className="text-lg font-bold text-green-600">
                            {calculateSavings(item.originalPrice, item.salePrice)}
                          </div>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => setCartItems(cartItems + 1)}
                      >
                        Add to Cart - {item.salePrice}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="watches">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {saleItems.watches.map((item) => (
                <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-red-200">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.image || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-red-600 text-white font-bold">
                          -{item.discount}
                        </Badge>
                        <Badge className="bg-stone-800 text-white text-xs">
                          {item.reason}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-stone-800 border-stone-300">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.timeLeft}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs text-stone-600 border-stone-300">
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.name}</h3>
                      <div className="space-y-1 text-sm text-stone-600 mb-4">
                        <div>Case: {item.metal}</div>
                        <div>Movement: {item.diamond}</div>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-red-600">{item.salePrice}</span>
                          <span className="text-sm text-stone-500 line-through">{item.originalPrice}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-stone-600">You Save</div>
                          <div className="text-lg font-bold text-green-600">
                            {calculateSavings(item.originalPrice, item.salePrice)}
                          </div>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => setCartItems(cartItems + 1)}
                      >
                        Add to Cart - {item.salePrice}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Sale Terms */}
      <div className="bg-stone-100 py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-serif text-center text-stone-800 mb-6 md:mb-8 tracking-wide">
            Sale Terms & Conditions
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 text-sm text-stone-600">
            <div>
              <h3 className="font-semibold text-stone-800 mb-3">Sale Information</h3>
              <ul className="space-y-2">
                <li>• All sale prices are final and cannot be combined with other offers</li>
                <li>• Limited quantities available - first come, first served</li>
                <li>• Sale items are subject to availability</li>
                <li>• Prices shown include VAT where applicable</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-3">Returns & Exchanges</h3>
              <ul className="space-y-2">
                <li>• 14-day return policy applies to sale items</li>
                <li>• Items must be in original condition</li>
                <li>• Exchanges subject to availability</li>
                <li>• Custom or altered items are final sale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency CTA */}
      <div className="bg-red-600 text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Don't Miss Out!</h2>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            These exclusive offers won't last long. Shop now and save on luxury jewelry and timepieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              className="bg-white text-red-600 hover:bg-stone-100 px-6 md:px-8 py-3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              SHOP SALE NOW
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-6 md:px-8 py-3"
              onClick={() => router.push('/services')}
            >
              NEED HELP?
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
