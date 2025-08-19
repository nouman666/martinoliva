'use client'

import { useState } from 'react'
import { Mail, Phone, Facebook, Instagram, Search, ShoppingBag, Users } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useCart } from '@/app/cart/page'

export default function WeddingBandsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { addItem, open } = useCart()

  // helper for £ string -> number
  const gbp = (s: string) => Number(s.replace(/[£,]/g, ''))

  const weddingBands = {
    women: [
      { id: 13, name: 'Classic Diamond Eternity', metal: 'Platinum',       diamonds: '0.50ct Total', width: '2.5mm', price: '£2,800', image: '/diamond-eternity-band.png' },
      { id: 14, name: 'Vintage Milgrain Band',    metal: '18k Yellow Gold', diamonds: '0.25ct Total', width: '3mm',   price: '£1,650', image: '/vintage-milgrain-band.png' },
      { id: 15, name: 'Modern Curved Band',       metal: '18k White Gold',  diamonds: '0.35ct Total', width: '2mm',   price: '£2,200', image: '/modern-curved-band.png' }
    ],
    men: [
      { id: 16, name: 'Classic Comfort Fit',      metal: 'Platinum',        diamonds: 'None',          width: '6mm',  price: '£1,200', image: '/mens-comfort-fit-band.png' },
      { id: 17, name: 'Brushed Titanium',         metal: 'Titanium',        diamonds: 'None',          width: '7mm',  price: '£450',   image: '/brushed-titanium-band.png' },
      { id: 18, name: 'Diamond Channel Set',      metal: '18k White Gold',  diamonds: '0.75ct Total',  width: '8mm',  price: '£3,500', image: '/mens-diamond-channel-band.png' }
    ],
    sets: [
      { id: 19, name: 'His & Hers Classic Set',   metal: 'Platinum',        diamonds: '0.25ct (Hers)', description: 'Matching comfort fit bands', price: '£2,400', image: '/his-hers-classic-set.png' },
      { id: 20, name: 'Modern Matching Set',      metal: '18k Rose Gold',   diamonds: '0.40ct (Hers)', description: 'Contemporary design',        price: '£2,850', image: '/modern-matching-set.png' }
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
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow us:</span>
            <a href="https://facebook.com/martinoliva" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4 hover:text-gray-300 transition-colors" />
            </a>
            <a href="https://instagram.com/martinoliva" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4 hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation — Wedding Bands active */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col gap-1 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-yellow-600" />
              <div className="w-6 h-0.5 bg-yellow-600" />
              <div className="w-6 h-0.5 bg-yellow-600" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-xl md:text-2xl font-bold tracking-wider">
                <span className="text-black">MARTIN OLIVA</span>
                <div className="text-xs text-gray-600 tracking-[0.3em] font-light">
                  The Total Watch and<br />
                  Jewellery Care Centre
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-yellow-600 transition-colors font-medium">Home</Link>
              <Link href="/diamonds" className="text-black hover:text-yellow-600 transition-colors font-medium">Diamonds</Link>
              <Link href="/engagement-rings" className="text-black hover:text-yellow-600 transition-colors font-medium">Engagement Rings</Link>
              <Link href="/wedding-bands" className="text-yellow-600 font-medium border-b-2 border-yellow-600 pb-1">Wedding Bands</Link>
              <Link href="/watches" className="text-black hover:text-yellow-600 transition-colors font-medium">Watches</Link>
              <Link href="/jewellery" className="text-black hover:text-yellow-600 transition-colors font-medium">Jewellery</Link>
              <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium">Bespoke</Link>
              <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium">Services</Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium">Contact</Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <Search className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
              <div className="relative">
                <ShoppingBag
                  className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors"
                  onClick={open}
                />
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
                <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium border-l-4 border-transparent hover:border-red-600 pl-4">Contact</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
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

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="women" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 md:mb-12 gap-2 sm:gap-0 bg-transparent p-0">
            <TabsTrigger
              value="women"
              className="w-full rounded-none py-3 md:py-4 text-white bg-black hover:bg-black/90 data-[state=active]:bg-gradient-to-r data-[state=active]:from-black data-[state=active]:to-yellow-600 data-[state=active]:text-white data-[state=active]:font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 transition-colors"
            >
              Women&apos;s Bands
            </TabsTrigger>
            <TabsTrigger
              value="men"
              className="w-full rounded-none py-3 md:py-4 text-white bg-black hover:bg-black/90 data-[state=active]:bg-gradient-to-r data-[state=active]:from-black data-[state=active]:to-yellow-600 data-[state=active]:text-white data-[state=active]:font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 transition-colors"
            >
              Men&apos;s Bands
            </TabsTrigger>
            <TabsTrigger
              value="sets"
              className="w-full rounded-none py-3 md:py-4 text-white bg-black hover:bg-black/90 data-[state=active]:bg-gradient-to-r data-[state=active]:from-black data-[state=active]:to-yellow-600 data-[state=active]:text-white data-[state=active]:font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 transition-colors"
            >
              Matching Sets
            </TabsTrigger>
          </TabsList>

          {/* Women */}
          <TabsContent value="women">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {weddingBands.women.map((band) => (
                <Card key={band.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img src={band.image || '/placeholder.svg'} alt={band.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                          onClick={() => {
                            addItem({ id: `band-${band.id}`, name: band.name, price: gbp(band.price), image: band.image, qty: 1 })
                            open()
                          }}
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

          {/* Men */}
          <TabsContent value="men">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {weddingBands.men.map((band) => (
                <Card key={band.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img src={band.image || '/placeholder.svg'} alt={band.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                          onClick={() => {
                            addItem({ id: `band-${band.id}`, name: band.name, price: gbp(band.price), image: band.image, qty: 1 })
                            open()
                          }}
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

          {/* Sets */}
          <TabsContent value="sets">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {weddingBands.sets.map((set) => (
                <Card key={set.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gray-100 rounded-t-lg overflow-hidden">
                      <img src={set.image || '/placeholder.svg'} alt={set.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                          onClick={() => {
                            addItem({ id: `band-${set.id}`, name: set.name, price: gbp(set.price), image: set.image, qty: 1 })
                            open()
                          }}
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

      {/* Footer — SAME AS DIAMONDS */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MARTIN OLIVA</h3>
              <p className="text-gray-400 mb-4">The Total Watch and<br />Jewellery Care Centre</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating exceptional jewelry pieces that celebrate life&apos;s most precious moments.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/engagement-rings" className="hover:text-white transition-colors">Engagement Rings</Link></li>
                <li><Link href="/wedding-bands" className="hover:text-white transition-colors">Wedding Bands</Link></li>
                <li><Link href="/diamonds" className="hover:text-white transition-colors">Diamonds</Link></li>
                <li><Link href="/jewellery" className="hover:text-white transition-colors">Fine Jewellery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/bespoke" className="hover:text-white transition-colors">Bespoke Design</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Repairs &amp; Maintenance</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Valuations</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Consultations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>studio@martinoliva.co.uk</p>
                <p>+44 7565 455568</p>
                <p>London, UK</p>
                <div className="flex gap-4 mt-4">
                  <Facebook className="w-5 h-5 hover:text-white transition-colors" />
                  <Instagram className="w-5 h-5 hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Martin Oliva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
