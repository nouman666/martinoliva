// app/bespoke/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag,
  Sparkles, CheckCircle, Clock, Users, Palette
} from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function BespokePage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<null | {type:'ok'|'err'; text:string}>(null)

  const bespokeProcess = [
    { step: 1, title: "Initial Consultation", description: "Share your vision and ideas with our expert designers", icon: Users },
    { step: 2, title: "Design Development",   description: "We create detailed sketches and 3D renderings",       icon: Palette },
    { step: 3, title: "Material Selection",    description: "Choose from our finest diamonds and precious metals", icon: Sparkles },
    { step: 4, title: "Craftsmanship",         description: "Our master craftsmen bring your design to life",      icon: Clock },
    { step: 5, title: "Final Approval",        description: "Review and approve your unique piece",                icon: CheckCircle },
  ]

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMessage(null)
    setSubmitting(true)

    // get a direct reference to the form BEFORE any await
    const formEl = e.currentTarget
    const fd = new FormData(formEl)

    const payload = {
      firstName: fd.get('firstName') || '',
      lastName: fd.get('lastName') || '',
      email: fd.get('email') || '',
      phone: fd.get('phone') || '',
      projectType: fd.get('projectType') || '',
      budget: fd.get('budget') || '',
      description: fd.get('description') || ''
    }

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Submission failed')
      }

      // SAFE reset using the element we already captured
      formEl.reset()
      setMessage({ type: 'ok', text: 'Thanks! We’ve received your request and will contact you shortly.' })
    } catch (err: any) {
      setMessage({ type: 'err', text: err?.message || 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar (matches other pages) */}
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

      {/* Hero */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black mb-4">Bespoke Jewellery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create something truly unique with our bespoke jewellery service. From initial concept to final creation,
            we work closely with you to bring your vision to life with exceptional craftsmanship.
          </p>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8 md:mb-16">
          Our Bespoke Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {bespokeProcess.map((p) => {
            const Icon = p.icon as any
            return (
              <div key={p.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {p.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Consultation Form */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">
              Start Your Bespoke Journey
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Tell us about your vision and we'll schedule a consultation to discuss your bespoke piece.
            </p>
          </div>

          {message && (
            <div className={`mb-4 rounded-md p-3 text-sm ${message.type === 'ok' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
              {message.text}
            </div>
          )}

          <Card className="border-gray-200">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-black">First Name</Label>
                    <Input id="firstName" name="firstName" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-black">Last Name</Label>
                    <Input id="lastName" name="lastName" className="mt-2" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-black">Email</Label>
                    <Input id="email" name="email" type="email" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-black">Phone</Label>
                    <Input id="phone" name="phone" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType" className="text-black">Project Type</Label>
                  <select id="projectType" name="projectType" className="w-full mt-2 p-3 border border-gray-300 rounded-md">
                    <option>Engagement Ring</option>
                    <option>Wedding Bands</option>
                    <option>Necklace</option>
                    <option>Earrings</option>
                    <option>Bracelet</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-black">Budget Range</Label>
                  <select id="budget" name="budget" className="w-full mt-2 p-3 border border-gray-300 rounded-md">
                    <option>£2,000 - £5,000</option>
                    <option>£5,000 - £10,000</option>
                    <option>£10,000 - £20,000</option>
                    <option>£20,000 - £50,000</option>
                    <option>£50,000+</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="description" className="text-black">Describe Your Vision</Label>
                  <Textarea
                    id="description"
                    name="description"
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell us about your dream piece - style, inspiration, special meaning, etc."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-12 py-3 text-lg disabled:opacity-60"
                  >
                    {submitting ? 'SENDING…' : 'REQUEST CONSULTATION'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Portfolio */}
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">
              Bespoke Portfolio
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Discover some of our recent bespoke creations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={`/bespoke-portfolio-${i}.png`}
                    alt={`Bespoke piece ${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black mb-1">Custom Creation {i}</h3>
                <p className="text-sm text-gray-600">Unique bespoke design</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
