'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, Package, Shield, Headphones, CreditCard } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

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
            <Search 
              className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-800 transition-colors" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-serif tracking-wider">
                <div className="flex flex-col items-center">
                  {/* Martin Oliva Logo */}
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
              <User 
                className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-800 transition-colors" 
                onClick={() => router.push('/account')}
              />
              <div className="relative">
                <ShoppingBag 
                  className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-800 transition-colors" 
                  onClick={() => router.push('/cart')}
                />
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
              <li><Link href="/jewellery" className="text-stone-800 hover:text-stone-600 transition-colors">JEWELLERY</Link></li>
              <li><Link href="/bespoke" className="text-stone-800 hover:text-stone-600 transition-colors">BESPOKE</Link></li>
              <li><Link href="/services" className="text-stone-800 hover:text-stone-600 transition-colors">SERVICES</Link></li>
              <li><Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors">SALE ITEMS</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="relative bg-stone-100 py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-6 tracking-wide">
              Exquisite Jewelry
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our collection of handcrafted diamonds, engagement rings, and bespoke jewelry pieces
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => router.push('/engagement-rings')}
                className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 text-sm tracking-widest"
              >
                ENGAGEMENT RINGS
              </Button>
              <Button 
                onClick={() => router.push('/diamonds')}
                variant="outline"
                className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-3 text-sm tracking-widest"
              >
                VIEW DIAMONDS
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-center text-stone-800 mb-16 tracking-wide">
              Our Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group cursor-pointer" onClick={() => router.push('/engagement-rings')}>
                <div className="bg-stone-200 h-80 rounded-sm mb-4 flex items-center justify-center group-hover:bg-stone-300 transition-colors">
                  <div className="w-20 h-20 border-2 border-stone-600 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-stone-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2 tracking-wide">Engagement Rings</h3>
                <p className="text-stone-600">Timeless symbols of eternal love</p>
              </div>
              
              <div className="group cursor-pointer" onClick={() => router.push('/diamonds')}>
                <div className="bg-stone-200 h-80 rounded-sm mb-4 flex items-center justify-center group-hover:bg-stone-300 transition-colors">
                  <div className="w-20 h-20 border-2 border-stone-600 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-stone-400 to-stone-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2 tracking-wide">Diamonds</h3>
                <p className="text-stone-600">Exceptional quality and brilliance</p>
              </div>
              
              <div className="group cursor-pointer" onClick={() => router.push('/wedding-bands')}>
                <div className="bg-stone-200 h-80 rounded-sm mb-4 flex items-center justify-center group-hover:bg-stone-300 transition-colors">
                  <div className="w-20 h-20 border-4 border-stone-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2 tracking-wide">Wedding Bands</h3>
                <p className="text-stone-600">Perfect companions for life</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-stone-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif text-stone-800 mb-8 tracking-wide">
              Crafted with Passion
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              At Martin Oliva, we believe that every piece of jewelry tells a story. Our master craftsmen 
              combine traditional techniques with contemporary design to create exceptional pieces that 
              celebrate life's most precious moments.
            </p>
            <Button 
              onClick={() => router.push('/bespoke')}
              className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 text-sm tracking-widest"
            >
              DISCOVER BESPOKE
            </Button>
          </div>
        </section>

        {/* Sidebar */}
        <div className="w-80 hidden">
          <Card className="border border-stone-300 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-sm font-semibold text-stone-800 mb-6 tracking-widest">NEED HELP? CALL US</h3>
              <a href="tel:+442085300382" className="text-3xl font-bold text-stone-900 mb-6 hover:text-stone-700 transition-colors cursor-pointer">
                +44 20 8530 0382
              </a>
              <div className="text-sm text-stone-600 space-y-2 leading-relaxed">
                <div className="font-medium">Lines open:</div>
                <div>Mon - Fri 10:00 - 18:00</div>
                <div>Sat 10:00 - 17:00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer Features */}
      <footer className="bg-white border-t border-stone-200 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 border border-stone-300 rounded-sm flex items-center justify-center">
                  <Package className="w-8 h-8 text-stone-600" />
                </div>
              </div>
              <h3 className="font-semibold text-stone-800 mb-4 tracking-wider text-sm">FREE UK SHIPPING</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Free UK Shipping on all our products. We ship Worldwide, please get in touch for International shipping fees.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 border border-stone-300 rounded-sm flex items-center justify-center">
                  <Shield className="w-8 h-8 text-stone-600" />
                </div>
              </div>
              <h3 className="font-semibold text-stone-800 mb-4 tracking-wider text-sm">30 DAYS MONEY BACK GUARANTEE</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Our customer satisfaction is very important to us, should you not be entirely happy with our product, we will gladly offer you a refund or exchange within 30 days. Please note this does not apply to items damaged or
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 border border-stone-300 rounded-sm flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-stone-600" />
                </div>
              </div>
              <h3 className="font-semibold text-stone-800 mb-4 tracking-wider text-sm">PROFESSIONAL SUPPORT</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We are available to assist you via phone, e-mail or What App. If you prefer face to face consultations, we will be delighted to welcome you in our store. Please get in touch, we love to help.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 border border-stone-300 rounded-sm flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-stone-600" />
                </div>
              </div>
              <h3 className="font-semibold text-stone-800 mb-4 tracking-wider text-sm">EASY, FLEXIBLE PAYMENTS AND 100% SECURE CHECKOUT</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We use Klarna to offer our customers a flexible solution: spread your payment into 3 installments. Secure Bank Transfer using our secure payment gateway.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
