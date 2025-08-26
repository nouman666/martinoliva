'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, MapPin, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useCart } from '@/app/cart/page'

type Location = {
  id: number
  title: string
  address: string
  phone: string
  email?: string
  hours?: string
  note?: string
  mapQuery: string
  image?: string // ✅ add image field
}

export default function ContactPage() {
  const router = useRouter()
  const [cartItems] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { addItem, open, count } = useCart()

  const locations: Location[] = [
    {
      id: 1,
      title: 'CAMBRIDGE SHOP UK',
      address: '34 Fitzroy Street, Outside Grafton Centre, Cambridge CB1 1EW',
      phone: '01223 678708',
      email: 'info@itechmobile.co.uk',
      hours: 'Mon–Sat 9:00–20:00 • Sun 10:00–20:00',
      mapQuery: '34 Fitzroy Street, Cambridge CB1 1EW',
      image: '/shops/cambridge.jpg', // 🔴 your image here
      // e.g. /public/shops/cambridge.jpg
    },
    {
      id: 2,
      title: 'LONDON SHOP UK (Balham)',
      address: '143 High Road, Balham, London SW12 9AU',
      phone: '020 8793 6137',
      email: 'info@itechmobile.co.uk',
      hours: 'Mon–Sat 9:00–20:00 • Sun 10:00–20:00',
      mapQuery: '143 High Rd, London SW12 9AU',
      image: '/shops/balham.jpg', // 🔴 your image here
    },
    {
      id: 3,
      title: 'BRIGHTON SHOP UK',
      address: '130 North Street, Brighton BN1 1RG',
      phone: '01273 080203',
      email: 'info@itechmobile.co.uk',
      hours: 'Mon–Sat 9:00–20:00 • Sun 10:00–20:00',
      mapQuery: '130 North St, Brighton BN1 1RG',
      image: '/shops/brighton.jpg', // 🔴 your image here
    },
    {
      id: 4,
      title: 'SAFFRON WALDEN SHOP UK',
      address: '38 High Street, Saffron Walden, Essex CB10 1EP',
      phone: '01223 375690',
      email: 'info@itechmobile.co.uk',
      hours: 'Mon–Sat 9:00–20:00 • Sun 10:00–20:00',
      mapQuery: '38 High St, Saffron Walden CB10 1EP',
      image: '/shops/saffron-walden.jpg', // 🔴 your image here
    },
    {
      id: 5,
      title: 'LONDON – GEORGE LANE (Service Options: Offers repair services)',
      address: '120 George Ln, London E18 1AD',
      phone: '07565 455568',
      email: 'info@itechmobile.co.uk',
      hours: 'Closed • Opens 10:00',
      note: 'Walk-in repairs available',
      mapQuery: '120 George Ln, London E18 1AD',
      image: '/shops/george-lane.jpg', // 🔴 your image here
    },
  ]

  const [selected, setSelected] = useState<Location>(locations[0])

  // map loading state for a short "few seconds" visual
  const [mapLoading, setMapLoading] = useState(false)
  const [mapVersion, setMapVersion] = useState(0) // bump to force iframe refresh if needed

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(selected.mapQuery)}&output=embed`

  function handleSelect(loc: Location) {
    setSelected(loc)
    setMapLoading(true)
    setMapVersion(v => v + 1)
    const t = setTimeout(() => setMapLoading(false), 1000)
    return () => clearTimeout(t)
  }

  useEffect(() => {
    setMapLoading(true)
    const t = setTimeout(() => setMapLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
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

      {/* Main Navigation */}
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
              <Link href="/wedding-bands" className="text-black hover:text-yellow-600 transition-colors font-medium">Wedding Bands</Link>
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
              <nav className="flex flex-col space-y-4 pt-4">
                {[
                  ['/', 'Home'],
                  ['/diamonds', 'Diamonds'],
                  ['/engagement-rings', 'Engagement Rings'],
                  ['/wedding-bands', 'Wedding Bands'],
                  ['/watches', 'Watches'],
                  ['/jewellery', 'Jewellery'],
                  ['/bespoke', 'Bespoke'],
                  ['/services', 'Services'],
                  ['/sale', 'Contact'],
                ].map(([href, label]) => (
                  <Link key={href} href={href} className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/daimond_banner.png")` }}
        >
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase mb-3 text-yellow-400">VISIT • CALL • MESSAGE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Locations + Map */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Locations list */}
        <div className="lg:col-span-2 space-y-4">
          {locations.map((loc, idx) => {
            const isHorizontal = idx >= locations.length - 2 // last two cards horizontal on md+
            return (
              <Card
                key={loc.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${selected.id === loc.id ? 'ring-2 ring-yellow-500' : ''}`}
                onClick={() => handleSelect(loc)}
              >
                <CardContent className={`p-5 ${isHorizontal ? 'md:flex md:items-start md:gap-4' : ''}`}>
                  <div className="flex items-start gap-3">
                    {/* ✅ Shop picture (thumbnail) */}
                    {loc.image && (
                      <img
                        src={loc.image}             // 🔴 your image here
                        alt={loc.title}
                        className="w-24 h-24 object-cover rounded-md border border-stone-200"
                      />
                    )}

                    <div className={`${isHorizontal ? 'md:flex-1' : ''}`}>
                      <h3 className="text-lg font-semibold text-black">{loc.title}</h3>
                      {loc.note && <p className="text-xs text-stone-600 mt-0.5">{loc.note}</p>}
                      <p className="text-stone-700 mt-2">{loc.address}</p>
                      <div className="mt-2 text-sm text-stone-600">
                        <div>Phone: <a className="underline hover:text-black" href={`tel:${loc.phone.replace(/\s+/g,'')}`}>{loc.phone}</a></div>
                        {loc.email && <div>Email: <a className="underline hover:text-black" href={`mailto:${loc.email}`}>{loc.email}</a></div>}
                        {loc.hours && <div>Hours: {loc.hours}</div>}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          className="border-black text-black hover:bg-black hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`, '_blank')
                          }}
                        >
                          Open in Google Maps
                        </Button>
                        <Button
                          className="bg-yellow-500 hover:bg-yellow-600 text-black"
                          onClick={(e) => {
                            e.stopPropagation()
                            router.push('/services')
                          }}
                        >
                          Book a Repair
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Map + selected shop banner */}
        <div className="lg:col-span-3">
          {/* ✅ Optional larger banner of selected shop */}
          {selected.image && (
            <div className="mb-4 rounded-lg overflow-hidden border border-stone-200">
              <img
                src={selected.image}            // 🔴 your image here
                alt={`${selected.title} photo`}
                className="w-full h-48 md:h-56 object-cover"
              />
            </div>
          )}

          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md border border-stone-200">
            {/* shimmer overlay while map updates */}
            {mapLoading && (
              <div className="absolute inset-0 z-10 bg-stone-100/80 backdrop-blur-sm flex flex-col items-center justify-center animate-pulse">
                <Loader2 className="w-8 h-8 mb-3 text-stone-600 animate-spin" />
                <span className="text-sm text-stone-700">Updating map…</span>
              </div>
            )}
            <iframe
              key={`${selected.id}-${mapVersion}`}
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map for ${selected.title}`}
              onLoad={() => setMapLoading(false)}
            ></iframe>
          </div>
          <p className="text-sm text-stone-600 mt-3">
            Showing: <span className="font-medium text-stone-800">{selected.title}</span>
          </p>
        </div>
      </div>

      {/* Footer */}
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
                <li><Link href="/services" className="hover:text-white transition-colors">Repairs & Maintenance</Link></li>
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
            <p>&copy; {new Date().getFullYear()} Martin Oliva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
