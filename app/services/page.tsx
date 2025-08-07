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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-black text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>studio@martinoliva.co.uk</span>
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
            
            <div className="flex items-center">
              <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider">
                <span className="text-black">MARTIN OLIVA</span>
                <div className="text-xs text-gray-600 tracking-[0.3em] font-light">FINE JEWELLERY</div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-yellow-600 transition-colors font-medium">Home</Link>
              <Link href="/diamonds" className="text-black hover:text-yellow-600 transition-colors font-medium">Diamonds</Link>
              <Link href="/engagement-rings" className="text-black hover:text-yellow-600 transition-colors font-medium">Engagement Rings</Link>
              <Link href="/wedding-bands" className="text-black hover:text-yellow-600 transition-colors font-medium">Wedding Bands</Link>
              <Link href="/watches" className="text-black hover:text-yellow-600 transition-colors font-medium">Watches</Link>
              <Link href="/jewellery" className="text-black hover:text-yellow-600 transition-colors font-medium">Jewellery</Link>
              <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium">Bespoke</Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium">Sale</Link>
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
              <Search className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
              <User className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
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
                <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Bespoke</Link>
                <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium border-l-4 border-transparent hover:border-red-600 pl-4">Sale</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Settings className="w-12 h-12 text-yellow-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black mb-4">Professional Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive range of professional services ensures your precious jewellery and timepieces 
            receive the expert care they deserve. From repairs to valuations, we're here to help.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Need Expert Advice?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-300 leading-relaxed">
            Our experienced team is here to help with all your jewellery and watch service needs. 
            Contact us today to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-3"
            >
              CALL US NOW
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3"
            >
              EMAIL ENQUIRY
            </Button>
          </div>
          
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-300 text-sm">Mon-Fri: 10:00-18:00</p>
              <p className="text-gray-300 text-sm">Sat: 10:00-17:00</p>
              <p className="text-gray-300 text-sm">Sun: Closed</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-300 text-sm">Martin Oliva London</p>
              <p className="text-gray-300 text-sm">Luxury Jewellery Quarter</p>
              <p className="text-gray-300 text-sm">London, UK</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-gray-300 text-sm">+44 20 8530 0382</p>
              <p className="text-gray-300 text-sm">studio@martinoliva.co.uk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
