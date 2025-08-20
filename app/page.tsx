'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from '@/app/cart/page'
import { Mail, Phone, Facebook, Instagram, Search, ShoppingBag, ChevronDown } from 'lucide-react'
import { useSearch } from '@/app/search/SearchContext'

export default function HomePage() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { open, count } = useCart()
  const [animation, setAnimation] = useState({ engagement: '', wedding: '', jewellery: '' })
  const { openSearch } = useSearch()

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-black to-yellow-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>studio@martinoliva.co.uk </span>
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

      {/* Main Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col gap-1 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-yellow-600 transition-all"></div>
              <div className="w-6 h-0.5 bg-yellow-600 transition-all"></div>
              <div className="w-6 h-0.5 bg-yellow-600 transition-all"></div>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-xl md:text-2xl font-bold tracking-wider">
                <span className="text-black">MARTIN OLIVA</span>
                <div className="text-xs text-gray-600 tracking-[0.3em] font-light leading-5">
                  The Total Watch and<br />
                  Jewellery Care Centre
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-yellow-600 transition-colors font-medium">Home</Link>
              <Link href="/diamonds" className="text-black hover:text-yellow-600 transition-colors font-medium">Diamonds</Link>

              {/* Jewellery dropdown (includes Engagement + Wedding) */}
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
                  <Link href="/jewellery" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Fine Jewellery</Link>
                  <Link href="/engagement-rings" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Engagement Rings</Link>
                  <Link href="/wedding-bands" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Wedding Bands</Link>
                </div>
              </div>

              <Link href="/watches" className="text-black hover:text-yellow-600 transition-colors font-medium">Watches</Link>
              <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium">Bespoke</Link>

              {/* Watch Care dropdown (NEW) */}
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
                  <Link href="/watch-care/ultrasonic-cleaning" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Ultrasonic Cleaning</Link>
                  <Link href="/watch-care/resealing" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Resealing</Link>
                  <Link href="/watch-care/polishing-before-after" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Polishing (Before & After)</Link>
                  <Link href="/watch-care/water-testing" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Water Testing</Link>
                  <Link href="/watch-care/regulating" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Regulating</Link>
                  <Link href="/watch-care/glass-crystal-replacement" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Glass (Crystal) Replacement</Link>
                  <Link href="/watch-care/crown-and-stem" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Crown & Stem</Link>
                  <Link href="/watch-care/straps-and-bracelet" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Straps & Bracelet</Link>
                  <Link href="/watch-care/links-alteration" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-900">Links Alteration</Link>
                </div>
              </div>

              {/* Keep Services as its own heading */}
              <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium">Services</Link>

              {/* Contact (your code points to /sale; keeping consistent) */}
              <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium">Contact</Link>
            </nav>

            {/* Right Icons */}
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
                <Link href="/" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Home</Link>
                <Link href="/diamonds" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Diamonds</Link>

                {/* Mobile: Jewellery */}
                <details className="group">
                  <summary className="cursor-pointer list-none pl-4 pr-4 py-2 flex items-center justify-between text-black font-medium border-l-4 border-transparent hover:text-yellow-600 hover:border-yellow-600">
                    <span>Jewellery</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="ml-8 mt-1 flex flex-col">
                    <Link href="/jewellery" className="py-1 text-gray-700 hover:text-yellow-600">Fine Jewellery</Link>
                    <Link href="/engagement-rings" className="py-1 text-gray-700 hover:text-yellow-600">Engagement Rings</Link>
                    <Link href="/wedding-bands" className="py-1 text-gray-700 hover:text-yellow-600">Wedding Bands</Link>
                  </div>
                </details>

                <Link href="/watches" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Watches</Link>
                <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Bespoke</Link>

                {/* Mobile: Watch Care (NEW) */}
                <details className="group">
                  <summary className="cursor-pointer list-none pl-4 pr-4 py-2 flex items-center justify-between text-black font-medium border-l-4 border-transparent hover:text-yellow-600 hover:border-yellow-600">
                    <span>Watch Care</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="ml-8 mt-1 flex flex-col">
                    <Link href="/watch-care/ultrasonic-cleaning" className="py-1 text-gray-700 hover:text-yellow-600">Ultrasonic Cleaning</Link>
                    <Link href="/watch-care/resealing" className="py-1 text-gray-700 hover:text-yellow-600">Resealing</Link>
                    <Link href="/watch-care/polishing-before-after" className="py-1 text-gray-700 hover:text-yellow-600">Polishing (Before & After)</Link>
                    <Link href="/watch-care/water-testing" className="py-1 text-gray-700 hover:text-yellow-600">Water Testing</Link>
                    <Link href="/watch-care/regulating" className="py-1 text-gray-700 hover:text-yellow-600">Regulating</Link>
                    <Link href="/watch-care/glass-crystal-replacement" className="py-1 text-gray-700 hover:text-yellow-600">Glass (Crystal) Replacement</Link>
                    <Link href="/watch-care/crown-and-stem" className="py-1 text-gray-700 hover:text-yellow-600">Crown & Stem</Link>
                    <Link href="/watch-care/straps-and-bracelet" className="py-1 text-gray-700 hover:text-yellow-600">Straps & Bracelet</Link>
                    <Link href="/watch-care/links-alteration" className="py-1 text-gray-700 hover:text-yellow-600">Links Alteration</Link>
                  </div>
                </details>

                {/* Keep Services as its own heading */}
                <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Services</Link>

                <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium border-l-4 border-transparent hover:border-red-600 pl-4">Contact</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/bespoke-portfoliofront.jpg")` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-yellow-400">GLOW WITH OUR JEWELS</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Exclusive Diamond
              <br />
              <span className="text-yellow-400">Jewellery</span>
            </h1>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Explore our unique designs crafted with the finest diamonds and precious metals.
              Each piece tells a story of elegance and timeless beauty.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => router.push('/diamonds')} className="btn-gold">SHOP NOW</Button>
            <Button onClick={() => router.push('/engagement-rings')} className="btn-white-outline">VIEW COLLECTIONS</Button>
          </div>
        </div>
      </section>

      {/* Our Collections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Collections</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our carefully curated collections of fine jewelry, each piece crafted with precision and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Engagement Rings */}
            <div
              className={`sweep-parent relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${animation.engagement}`}
              onMouseEnter={() => setAnimation({ ...animation, engagement: 'sweep-out' })}
              onMouseLeave={() => setAnimation({ ...animation, engagement: 'sweep-in' })}
              onClick={() => router.push('/engagement-rings')}
            >
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Engagement Rings"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full px-6 py-6 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700 ease-in-out text-white z-20">
                <span className="text-xs uppercase tracking-widest text-yellow-400 mb-1 block">RINGS</span>
                <h3 className="text-2xl font-semibold mb-1">Engagement Rings</h3>
                <p className="text-sm mb-4 text-gray-200">Forever Begins</p>
                <Button className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-none hover:bg-yellow-500">
                  EXPLORE COLLECTION
                </Button>
              </div>
            </div>

            {/* Wedding Bands */}
            <div
              className={`sweep-parent relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${animation.wedding}`}
              onMouseEnter={() => setAnimation({ ...animation, wedding: 'sweep-out' })}
              onMouseLeave={() => setAnimation({ ...animation, wedding: 'sweep-in' })}
              onClick={() => router.push('/wedding-bands')}
            >
              <img
                src="https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Wedding Bands"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full px-6 py-6 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700 ease-in-out text-white z-20">
                <span className="text-xs uppercase tracking-widest text-yellow-400 mb-1 block">BANDS</span>
                <h3 className="text-2xl font-semibold mb-1">Wedding Bands</h3>
                <p className="text-sm mb-4 text-gray-200">Together Forever</p>
                <Button className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-none hover:bg-yellow-500">
                  EXPLORE COLLECTION
                </Button>
              </div>
            </div>

            {/* Fine Jewellery */}
            <div
              className={`sweep-parent relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${animation.jewellery}`}
              onMouseEnter={() => setAnimation({ ...animation, jewellery: 'sweep-out' })}
              onMouseLeave={() => setAnimation({ ...animation, jewellery: 'sweep-in' })}
              onClick={() => router.push('/jewellery')}
            >
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fine Jewellery"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full px-6 py-6 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700 ease-in-out text-white z-20">
                <span className="text-xs uppercase tracking-widest text-yellow-400 mb-1 block">FINE</span>
                <h3 className="text-2xl font-semibold mb-1">Fine Jewellery</h3>
                <p className="text-sm mb-4 text-gray-200">Elegance Daily</p>
                <Button className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-none hover:bg-yellow-500">
                  EXPLORE COLLECTION
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Crafted with Passion</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Martin Oliva, we believe that every piece of jewelry tells a story. Our master craftsmen
                combine traditional techniques with contemporary design to create exceptional pieces that
                celebrate life's most precious moments.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From engagement rings that symbolize eternal love to bespoke pieces that capture your unique style,
                we are dedicated to creating jewelry that will be treasured for generations.
              </p>
              <Button
                onClick={() => router.push('/bespoke')}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 uppercase tracking-wider"
              >
                Discover Bespoke
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Jewelry Craftsmanship"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MARTIN OLIVA</h3>
              <p className="text-gray-400 mb-4">The Total Watch and Jewellery Care Centre</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating exceptional jewelry pieces that celebrate life's most precious moments.
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
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
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
                  <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                  <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Martin Oliva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
