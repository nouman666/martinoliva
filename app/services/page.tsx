'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag, Settings, Shield, Clock, Sparkles, Wrench, Award } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(0)

  const services = [
    {
      id: 1,
      title: "Jewellery Repair & Restoration",
      description: "Expert repair services for all types of fine jewellery, from simple fixes to complete restorations.",
      features: ["Ring resizing", "Stone replacement", "Chain repair", "Antique restoration"],
      icon: Wrench,
      price: "From £50"
    },
    {
      id: 2,
      title: "Watch Services",
      description: "Comprehensive watch servicing by certified watchmakers for all luxury timepiece brands.",
      features: ["Full service", "Battery replacement", "Water resistance testing", "Bracelet adjustment"],
      icon: Clock,
      price: "From £150"
    },
    {
      id: 3,
      title: "Valuation & Insurance",
      description: "Professional jewellery valuations for insurance, probate, or personal knowledge.",
      features: ["Insurance valuations", "Probate valuations", "Verbal valuations", "Written certificates"],
      icon: Shield,
      price: "From £75"
    },
    {
      id: 4,
      title: "Cleaning & Maintenance",
      description: "Professional cleaning and maintenance to keep your jewellery looking its best.",
      features: ["Ultrasonic cleaning", "Steam cleaning", "Polishing", "Rhodium plating"],
      icon: Sparkles,
      price: "From £25"
    },
    {
      id: 5,
      title: "Bespoke Design",
      description: "Create unique, one-of-a-kind pieces tailored to your personal style and preferences.",
      features: ["Design consultation", "3D rendering", "Custom manufacturing", "Personal service"],
      icon: Settings,
      price: "From £2,000"
    },
    {
      id: 6,
      title: "Certification Services",
      description: "Diamond and gemstone certification from recognized international laboratories.",
      features: ["GIA certification", "Diamond grading", "Gemstone identification", "Authenticity verification"],
      icon: Award,
      price: "From £200"
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
              <li><Link href="/bespoke" className="text-stone-800 hover:text-stone-600 transition-colors">BESPOKE</Link></li>
              <li><Link href="/services" className="text-stone-800 hover:text-stone-600 transition-colors border-b-2 border-stone-800 pb-1">SERVICES</Link></li>
              <li><Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors">SALE ITEMS</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Settings className="w-12 h-12 text-stone-600 mx-auto mb-6" />
          <h1 className="text-4xl font-serif text-stone-800 mb-4 tracking-wide">Professional Services</h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive range of professional services ensures your precious jewellery and timepieces 
            receive the expert care they deserve. From repairs to valuations, we're here to help.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stone-800">{service.title}</h3>
                      <p className="text-stone-600 text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-stone-600">
                        <div className="w-2 h-2 bg-stone-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white">
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-stone-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6 tracking-wide">
            Need Expert Advice?
          </h2>
          <p className="text-lg mb-8 text-stone-300 leading-relaxed">
            Our experienced team is here to help with all your jewellery and watch service needs. 
            Contact us today to discuss your requirements.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              className="bg-white text-stone-800 hover:bg-stone-100 px-8 py-3"
            >
              CALL US NOW
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-800 px-8 py-3"
            >
              EMAIL ENQUIRY
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Opening Hours</h3>
              <p className="text-stone-300 text-sm">Mon-Fri: 10:00-18:00</p>
              <p className="text-stone-300 text-sm">Sat: 10:00-17:00</p>
              <p className="text-stone-300 text-sm">Sun: Closed</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-stone-300 text-sm">Martin Oliva London</p>
              <p className="text-stone-300 text-sm">Luxury Jewellery Quarter</p>
              <p className="text-stone-300 text-sm">London, UK</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-stone-300 text-sm">+44 20 8530 0382</p>
              <p className="text-stone-300 text-sm">studio@martinoliva.co.uk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
