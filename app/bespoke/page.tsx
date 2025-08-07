'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, Sparkles, CheckCircle, Clock, Users, Palette } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function BespokePage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)

  const bespokeProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Share your vision and ideas with our expert designers",
      icon: Users
    },
    {
      step: 2,
      title: "Design Development",
      description: "We create detailed sketches and 3D renderings",
      icon: Palette
    },
    {
      step: 3,
      title: "Material Selection",
      description: "Choose from our finest diamonds and precious metals",
      icon: Sparkles
    },
    {
      step: 4,
      title: "Craftsmanship",
      description: "Our master craftsmen bring your design to life",
      icon: Clock
    },
    {
      step: 5,
      title: "Final Approval",
      description: "Review and approve your unique piece",
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
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

      <header className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Search className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-800 transition-colors" />
            
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-serif tracking-wider">
                <div className="flex flex-col items-center">
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
              <User className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-800 transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-800 transition-colors" />
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
              <li><Link href="/bespoke" className="text-stone-800 hover:text-stone-600 transition-colors border-b-2 border-stone-800 pb-1">BESPOKE</Link></li>
              <li><Link href="/services" className="text-stone-800 hover:text-stone-600 transition-colors">SERVICES</Link></li>
              <li><Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors">SALE ITEMS</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 text-stone-600 mx-auto mb-6" />
          <h1 className="text-4xl font-serif text-stone-800 mb-4 tracking-wide">Bespoke Jewellery</h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Create something truly unique with our bespoke jewellery service. From initial concept to final creation, 
            we work closely with you to bring your vision to life with exceptional craftsmanship.
          </p>
        </div>
      </div>

      {/* Bespoke Process */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-serif text-center text-stone-800 mb-16 tracking-wide">
          Our Bespoke Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {bespokeProcess.map((process, index) => {
            const IconComponent = process.icon
            return (
              <div key={process.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-stone-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{process.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{process.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Consultation Form */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-stone-800 mb-4 tracking-wide">
              Start Your Bespoke Journey
            </h2>
            <p className="text-lg text-stone-600">
              Tell us about your vision and we'll schedule a consultation to discuss your bespoke piece.
            </p>
          </div>

          <Card className="border-stone-200">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-stone-800">First Name</Label>
                    <Input id="firstName" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-stone-800">Last Name</Label>
                    <Input id="lastName" className="mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-stone-800">Email</Label>
                    <Input id="email" type="email" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-stone-800">Phone</Label>
                    <Input id="phone" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType" className="text-stone-800">Project Type</Label>
                  <select id="projectType" className="w-full mt-2 p-3 border border-stone-300 rounded-md">
                    <option>Engagement Ring</option>
                    <option>Wedding Bands</option>
                    <option>Necklace</option>
                    <option>Earrings</option>
                    <option>Bracelet</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-stone-800">Budget Range</Label>
                  <select id="budget" className="w-full mt-2 p-3 border border-stone-300 rounded-md">
                    <option>£2,000 - £5,000</option>
                    <option>£5,000 - £10,000</option>
                    <option>£10,000 - £20,000</option>
                    <option>£20,000 - £50,000</option>
                    <option>£50,000+</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="description" className="text-stone-800">Describe Your Vision</Label>
                  <Textarea 
                    id="description" 
                    className="mt-2 min-h-[120px]" 
                    placeholder="Tell us about your dream piece - style, inspiration, special meaning, etc."
                  />
                </div>

                <div className="text-center">
                  <Button className="bg-stone-900 hover:bg-stone-800 text-white px-12 py-3 text-lg">
                    REQUEST CONSULTATION
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Portfolio Gallery */}
      <div className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-stone-800 mb-4 tracking-wide">
              Bespoke Portfolio
            </h2>
            <p className="text-lg text-stone-600">
              Discover some of our recent bespoke creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={`/bespoke-portfolio-${item}.png` || "/placeholder.svg"} 
                    alt={`Bespoke piece ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-1">Custom Creation {item}</h3>
                <p className="text-sm text-stone-600">Unique bespoke design</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
