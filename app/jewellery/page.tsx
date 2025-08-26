'use client'

import { useState } from 'react'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag,ChevronDown  } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from '@/app/cart/page'

export default function JewelleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { addItem, open, count } = useCart()
  const { openSearch } = useSearch()   // ✅ add this
  // helper: "£4,500" -> 4500
const gbp = (s: string) => Number(s.replace(/[^\d.]/g, '')) // strips £ , spaces, etc.

  const jewellery = [
    { id: 27, name: "Gold Necklace",        price: "£3,200", image: "/gold-necklace.png" },
    { id: 28, name: "Diamond Earrings",     price: "£4,500", image: "/diamond-earrings.png" },
    { id: 29, name: "Platinum Bracelet",    price: "£6,800", image: "/platinum-bracelet.png" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar — same as Diamond Page */}
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
              <Facebook className="w-4 h-4 hover:text-gray-300 cursor-pointer transition-colors" />
            </a>
            <a href="https://instagram.com/martinoliva" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4 hover:text-gray-300 cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation — same as Diamond Page */}
       <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col gap-1 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-yellow-600 transition-all" />
              <div className="w-6 h-0.5 bg-yellow-600 transition-all" />
              <div className="w-6 h-0.5 bg-yellow-600 transition-all" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-xl md:text-2xl font-bold tracking-wider">
                <span className="text-black">MARTIN OLIVA</span>
                <div className="text-xs text-gray-600 tracking-[0.3em] font-light leading-5">
                  The Total Watch and
                  <br />
                  Jewellery Care Centre
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-yellow-600 transition-colors font-medium">
                Home
              </Link>
              <Link
                href="/diamonds"
                className="text-black hover:text-yellow-600 transition-colors font-medium"
              >
                Diamonds
              </Link>

              {/* Jewellery dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-black hover:text-yellow-600 transition-colors font-medium">
                  Jewellery
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150
                             absolute left-0 top-full mt-2 w-56 bg-white shadow-lg border border-gray-100 rounded-md p-2"
                  role="menu"
                >
                  <Link
                    href="/jewellery"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Fine Jewellery
                  </Link>
                  <Link
                    href="/engagement-rings"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Engagement Rings
                  </Link>
                  <Link
                    href="/wedding-bands"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Wedding Bands
                  </Link>
                </div>
              </div>

              <Link href="/watches" className="text-black hover:text-yellow-600 transition-colors font-medium">
                Watches
              </Link>
              <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium">
                Bespoke
              </Link>

              {/* Watch Care dropdown (slugified URLs) */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-black hover:text-yellow-600 transition-colors font-medium">
                  Watch Care
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150
                             absolute left-0 top-full mt-2 w-64 bg-white shadow-lg border border-gray-100 rounded-md p-2"
                  role="menu"
                >
                  <Link
                    href="/watch-care/ultrasonic-cleaning"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Ultrasonic Cleaning
                  </Link>
                  <Link
                    href="/watch-care/resealing"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Resealing
                  </Link>
                  <Link
                    href="/watch-care/polishing-before-after"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Polishing (Before &amp; After)
                  </Link>
                  <Link
                    href="/watch-care/water-testing"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Water Testing
                  </Link>
                  <Link
                    href="/watch-care/regulating"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Regulating
                  </Link>
                  <Link
                    href="/watch-care/glass-crystal-replacement"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Glass (Crystal) Replacement
                  </Link>
                  <Link
                    href="/watch-care/crown-and-stem"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Crown &amp; Stem
                  </Link>
                  <Link
                    href="/watch-care/straps-and-bracelet"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Straps &amp; Bracelet
                  </Link>
                  <Link
                    href="/watch-care/links-alteration"
                    className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900"
                  >
                    Links Alteration
                  </Link>
                </div>
              </div>

              <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Right Icons — Search now opens the same SearchOverlay via useSearch */}
            <div className="flex items-center gap-3 md:gap-4">
              <Search
                className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors"
                onClick={openSearch}
              />
              <div className="relative">
                <ShoppingBag
                  className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors"
                  onClick={open}
                />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full min-w-5 h-5 px-1.5 flex items-center justify-center font-semibold">
                    {count}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-yellow-200">
              <nav className="flex flex-col space-y-2 pt-4">
                <Link
                  href="/"
                  className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4"
                >
                  Home
                </Link>
                <Link
                  href="/diamonds"
                  className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4"
                >
                  Diamonds
                </Link>

                {/* Mobile: Jewellery */}
                <details className="group">
                  <summary className="cursor-pointer list-none pl-4 pr-4 py-2 flex items-center justify-between text-black font-medium border-l-4 border-transparent hover:text-yellow-600 hover:border-yellow-600">
                    <span>Jewellery</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="ml-8 mt-1 flex flex-col">
                    <Link href="/jewellery" className="py-1 text-gray-700 hover:text-yellow-600">
                      Fine Jewellery
                    </Link>
                    <Link href="/engagement-rings" className="py-1 text-gray-700 hover:text-yellow-600">
                      Engagement Rings
                    </Link>
                    <Link href="/wedding-bands" className="py-1 text-gray-700 hover:text-yellow-600">
                      Wedding Bands
                    </Link>
                  </div>
                </details>

                <Link
                  href="/watches"
                  className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4"
                >
                  Watches
                </Link>
                <Link
                  href="/bespoke"
                  className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4"
                >
                  Bespoke
                </Link>

                {/* Mobile: Watch Care */}
                <details className="group">
                  <summary className="cursor-pointer list-none pl-4 pr-4 py-2 flex items-center justify-between text-black font-medium border-l-4 border-transparent hover:text-yellow-600 hover:border-yellow-600">
                    <span>Watch Care</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="ml-8 mt-1 flex flex-col">
                    <Link href="/watch-care/ultrasonic-cleaning" className="py-1 text-gray-700 hover:text-yellow-600">
                      Ultrasonic Cleaning
                    </Link>
                    <Link href="/watch-care/resealing" className="py-1 text-gray-700 hover:text-yellow-600">
                      Resealing
                    </Link>
                    <Link
                      href="/watch-care/polishing-before-after"
                      className="py-1 text-gray-700 hover:text-yellow-600"
                    >
                      Polishing (Before &amp; After)
                    </Link>
                    <Link href="/watch-care/water-testing" className="py-1 text-gray-700 hover:text-yellow-600">
                      Water Testing
                    </Link>
                    <Link href="/watch-care/regulating" className="py-1 text-gray-700 hover:text-yellow-600">
                      Regulating
                    </Link>
                    <Link
                      href="/watch-care/glass-crystal-replacement"
                      className="py-1 text-gray-700 hover:text-yellow-600"
                    >
                      Glass (Crystal) Replacement
                    </Link>
                    <Link href="/watch-care/crown-and-stem" className="py-1 text-gray-700 hover:text-yellow-600">
                      Crown &amp; Stem
                    </Link>
                    <Link href="/watch-care/straps-and-bracelet" className="py-1 text-gray-700 hover:text-yellow-600">
                      Straps &amp; Bracelet
                    </Link>
                    <Link href="/watch-care/links-alteration" className="py-1 text-gray-700 hover:text-yellow-600">
                      Links Alteration
                    </Link>
                  </div>
                </details>

                <Link
                  href="/services"
                  className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4"
                >
                  Services
                </Link>
                <Link
                  href="/sale"
                  className="text-red-600 hover:text-red-700 transition-colors font-medium border-l-4 border-transparent hover:border-red-600 pl-4"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/jewellery_banner.png")` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fine <span className="text-yellow-400">Jewellery</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover timeless jewellery pieces designed with passion and crafted with precision.
          </p>
        </div>
      </section>

      {/* Jewellery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jewellery.map((item) => (
          <Card key={item.id} className="group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-black">{item.price}</span>
                  <Button
                    size="sm"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                    onClick={() => {
                      addItem({
                        id: `jewel-${item.id}`,
                        name: item.name,
                        price: gbp(item.price),
                        image: item.image,
                        qty: 1,
                      })
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

      {/* Footer — same as Diamond Page */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MARTIN OLIVA</h3>
              <p className="text-gray-400 mb-4">The Total Watch and<br />
                  Jewellery Care Centre</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating exceptional jewelry pieces that celebrate life's most precious moments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/engagement-rings" className="hover:text-white">Engagement Rings</Link></li>
                <li><Link href="/wedding-bands" className="hover:text-white">Wedding Bands</Link></li>
                <li><Link href="/diamonds" className="hover:text-white">Diamonds</Link></li>
                <li><Link href="/jewellery" className="hover:text-white">Fine Jewellery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/bespoke" className="hover:text-white">Bespoke Design</Link></li>
                <li><Link href="/services" className="hover:text-white">Repairs &amp; Maintenance</Link></li>
                <li><Link href="/services" className="hover:text-white">Valuations</Link></li>
                <li><Link href="/services" className="hover:text-white">Consultations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>studio@martinoliva.co.uk</p>
                <p>+44 7565 455568</p>
                <p>London, UK</p>
                <div className="flex gap-4 mt-4">
                  <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
                  <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
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
