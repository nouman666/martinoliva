'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag,
  PencilRuler, Gem, Sparkles, CheckCircle2, ChevronDown
} from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BespokePage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-white">
      {/* ===== TOP HEADER BAR — identical styling to Diamonds ===== */}
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

      {/* ===== MAIN NAV — identical markup to Diamonds, with /bespoke active ===== */}
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
                <div className="text-xs text-gray-600 tracking-[0.3em] font-light">FINE JEWELLERY</div>
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
              <Link href="/bespoke" className="text-yellow-600 font-medium border-b-2 border-yellow-600 pb-1">Bespoke</Link>
              <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium">Services</Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium">Sale</Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <Search className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
              <User className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
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
                <Link href="/jewellery" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Jewellery</Link>
                <Link href="/bespoke" className="text-yellow-600 font-medium border-l-4 border-yellow-600 pl-4">Bespoke</Link>
                <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Services</Link>
                <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium border-l-4 border-transparent hover:border-red-600 pl-4">Sale</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ===== HERO — bespoke banner ===== */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/bespoke_banner.png")` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-yellow-400">CUSTOM DESIGN • PERSONAL SERVICE</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bespoke <span className="text-yellow-400">Jewellery</span>
          </h1>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            From sketch to sparkle — create a one‑of‑a‑kind piece with our master artisans.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
              onClick={() => router.push('/consultation')}
            >
              BOOK A CONSULTATION
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
              onClick={() => router.push('/diamonds')}
            >
              BROWSE DIAMONDS
            </Button>
          </div>
        </div>
      </section>

      {/* ===== 3-Step Process ===== */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <PencilRuler className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">1. Discovery</h3>
              <p className="text-gray-600">
                Share inspiration, budget and timelines. We translate your ideas into initial sketches and options.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">2. Design & Select</h3>
              <p className="text-gray-600">
                Choose stones & metals. We provide 3D renders and refine details until you love every angle.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">3. Craft & Deliver</h3>
              <p className="text-gray-600">
                Master goldsmiths hand‑craft your piece. Final inspection & beautiful presentation included.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Showcase / Inspiration (placeholder images) ===== */}
      <section className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Recent Bespoke Creations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            "/bespoke_01.png",
            "/bespoke_02.png",
            "/bespoke_03.png",
            "/bespoke_04.png",
            "/bespoke_05.png",
            "/bespoke_06.png",
          ].map((src, i) => (
            <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={src}
                    alt={`Bespoke design ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Why Martin Oliva Bespoke?</h2>
            <p className="text-gray-600 mb-6">
              Ethical diamonds, exceptional craftsmanship, and a white‑glove experience from start to finish.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "GIA‑certified diamonds and precious gemstones",
                "Hand‑crafted by master goldsmiths in the UK",
                "Transparent pricing & timelines",
                "Lifetime cleaning & complimentary inspections",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Button
                className="bg-black hover:bg-gray-800 text-white px-6"
                onClick={() => router.push('/consultation')}
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-6"
                onClick={() => router.push('/services')}
              >
                Explore Services
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded">
              <img src="/bespoke_stack_01.png" className="w-full h-full object-cover" alt="Craft detail 1" />
            </div>
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded mt-8">
              <img src="/bespoke_stack_02.png" className="w-full h-full object-cover" alt="Craft detail 2" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick Enquiry (lightweight) ===== */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-center">Have an idea already?</h2>
          <p className="text-gray-600 text-center mb-8">
            Send us your inspiration and preferred budget — we’ll get back with options within 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
            />
            <input
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Email Address"
            />
            <input
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Approx. Budget (e.g., £3,000)"
            />
          </div>
          <textarea
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full mt-4 min-h-[120px]"
            placeholder="Tell us about the design, metal, stones, occasion…"
          />
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
            <div className="text-sm text-gray-500">
              You can also email us directly: <span className="text-black">studio@martinoliva.co.uk</span>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3">
              Send Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Bespoke FAQs</h2>
        <div className="divide-y divide-gray-200 border border-gray-200 rounded">
          {[
            {
              q: "How long does a bespoke piece take?",
              a: "Typically 3–6 weeks depending on complexity and stone sourcing. We’ll confirm an exact timeline after design approval."
            },
            {
              q: "Can you work with my existing stones or heirloom jewellery?",
              a: "Yes. We regularly repurpose heirloom stones and metal where suitable, preserving your piece’s sentimental value."
            },
            {
              q: "Do you provide 3D renders before crafting?",
              a: "Absolutely. We share detailed CAD/3D visuals and make iterations until you’re happy with every detail."
            },
            {
              q: "What certifications do you provide?",
              a: "Diamonds can be GIA-certified on request. We also provide our own valuation paperwork for insurance."
            }
          ].map((item, idx) => (
            <button
              key={idx}
              className="w-full text-left p-4 focus:outline-none"
              onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
              aria-expanded={faqOpen === idx}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-black">{item.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`} />
              </div>
              {faqOpen === idx && (
                <p className="text-gray-600 mt-2 pr-6">{item.a}</p>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ===== FOOTER — identical to Diamonds ===== */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MARTIN OLIVA</h3>
              <p className="text-gray-400 mb-4">Fine Jewellery</p>
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
            <p>&copy; 2025 Martin Oliva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
