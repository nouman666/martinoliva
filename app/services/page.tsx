'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail, Phone, Facebook, Instagram, Search, User, ShoppingBag,
  Settings, Shield, Clock, Sparkles, Wrench, Award
} from 'lucide-react'

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
      price: "From £50",
    },
    {
      id: 2,
      title: "Watch Services",
      description: "Comprehensive watch servicing by certified watchmakers for all luxury timepiece brands.",
      features: ["Full service", "Battery replacement", "Water resistance testing", "Bracelet adjustment"],
      icon: Clock,
      price: "From £150",
    },
    {
      id: 3,
      title: "Valuation & Insurance",
      description: "Professional jewellery valuations for insurance, probate, or personal knowledge.",
      features: ["Insurance valuations", "Probate valuations", "Verbal valuations", "Written certificates"],
      icon: Shield,
      price: "From £75",
    },
    {
      id: 4,
      title: "Cleaning & Maintenance",
      description: "Professional cleaning and maintenance to keep your jewellery looking its best.",
      features: ["Ultrasonic cleaning", "Steam cleaning", "Polishing", "Rhodium plating"],
      icon: Sparkles,
      price: "From £25",
    },
    {
      id: 5,
      title: "Bespoke Design",
      description: "Create unique, one-of-a-kind pieces tailored to your personal style and preferences.",
      features: ["Design consultation", "3D rendering", "Custom manufacturing", "Personal service"],
      icon: Settings,
      price: "From £2,000",
    },
    {
      id: 6,
      title: "Certification Services",
      description: "Diamond and gemstone certification from recognized international laboratories.",
      features: ["GIA certification", "Diamond grading", "Gemstone identification", "Authenticity verification"],
      icon: Award,
      price: "From £200",
    },
     ]
const watchCare = [
    {
      id: 'ultrasonic',
      title: "Ultrasonic Cleaning",
      description: "Deep clean to remove dirt and oils from case & bracelet.",
      icon: Sparkles,
      price: "From £25",
    },
    {
      id: 'resealing',
      title: "Resealing",
      description: "Renew case gaskets to help maintain water resistance.",
      icon: Shield,
      price: "From £30",
    },
    {
      id: 'polishing',
      title: "Polishing (Before & After)",
      description: "Professional refinish to restore shine and remove light scratches.",
      icon: Sparkles,
      price: "From £60",
    },
    {
      id: 'water-test',
      title: "Water Testing",
      description: "Pressure test in a certified machine to factory spec.",
      icon: Droplets,
      price: "From £35",
    },
    {
      id: 'regulating',
      title: "Regulating",
      description: "Adjust timing on a timing machine for optimal accuracy.",
      icon: Gauge,
      price: "From £45",
    },
    {
      id: 'glass',
      title: "Glass (Crystal) Replacement",
      description: "Replace cracked or scratched crystal (mineral/sapphire).",
      icon: Square,
      price: "From £90",
    },
    {
      id: 'crown-stem',
      title: "Crown & Stem",
      description: "Repair or replace worn/damaged crown and stem.",
      icon: Crown,
      price: "From £85",
    },
    {
      id: 'straps-bracelet',
      title: "Straps & Bracelet",
      description: "Fit new straps/bracelets or repair existing ones.",
      icon: Scissors,
      price: "From £25",
    },
    {
      id: 'links',
      title: "Links Alteration",
      description: "Add/remove links and micro‑adjust bracelet sizing.",
      icon: LinkIcon,
      price: "From £15",
    },
  ]

  // battery plans section content
  const batteryPlans = [
    {
      name: "Standard",
      details: ["Battery fitted to spec", "Case reseal"],
      guarantee: "12 months guarantee",
      price: "From £15",
      eta: "≈ 30 mins",
    },
    {
      name: "Premium",
      details: ["Battery & reseal", "Pressure testing", "Ultrasonic clean"],
      guarantee: "24 months guarantee",
      price: "From £25",
      eta: "≈ 60 mins",
    },
    {
      name: "Complete",
      details: ["Battery, reseal & pressure test", "Ultrasonic clean", "Light polish"],
      guarantee: "36 months guarantee",
      price: "From £35",
      eta: "≈ 2 hours",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar — matches Home */}
      <div className="bg-gradient-to-r from-black to-yellow-600 text-white py-2 px-4">
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

      {/* Main Navigation — matches Home */}
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
              <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium">Bespoke</Link>
              <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium">Services</Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium">Sale</Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <Search className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors" />
              <User
                className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors"
                onClick={() => router.push('/account')}
              />
              <div className="relative">
                <ShoppingBag
                  className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600 transition-colors"
                  onClick={() => router.push('/cart')}
                />
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
                <Link href="/bespoke" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Bespoke</Link>
                <Link href="/services" className="text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4">Services</Link>
                <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium border-l-4 border-transparent hover:border-red-600 pl-4">Sale</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section — black & gold feel */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/bespoke-portfoliofront.jpg")` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-yellow-400">Expert Care • Honest Advice</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Repairs, valuations, cleaning, bespoke design, and more—handled by specialists you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => router.push('/bespoke')} className="btn-gold">BOOK A CONSULTATION</Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
            <Card key={service.id} className="group flex flex-col h-full hover:shadow-xl transition-all duration-300">
  <CardContent className="flex flex-col flex-1 p-6">
    {/* Icon + Title + Price */}
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
        <service.icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-black">{service.title}</h3>
        <p className="text-gray-600 text-sm">{service.price}</p>
      </div>
    </div>

    {/* Description */}
    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

    {/* Features */}
    <ul className="space-y-2 mb-6">
      {service.features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm text-gray-600">
          <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
          {feature}
        </li>
      ))}
    </ul>

    {/* Book Button pinned at bottom */}
    <div className="mt-auto">
      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
        Book Service
      </Button>
    </div>
  </CardContent>
</Card>
            )
          })}
        </div>
      </section>
 {/* Total Watch Care & Battery Plans */}
      <section className="max-w-7xl mx-auto px-4 pb-4 md:pb-10">
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              The Total Watch Care & Jewellery Repair Services
            </h2>
            <p className="text-gray-700 mb-4">
              We fit batteries to manufacturer specifications. Batteries fitted <strong>from £15</strong>, depending on brand and requirements.
              Choose one of our care plan options for battery replacement across all manufacturer brands:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {batteryPlans.map((p) => (
                <Card key={p.name} className="border-gray-200">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-black mb-2">{p.name} Plan</h3>
                    <ul className="text-sm text-gray-700 space-y-2 mb-4">
                      {p.details.map((d, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-gray-600 mb-3">{p.guarantee}</div>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <div className="text-lg font-bold text-black">{p.price}</div>
                        <div className="text-xs text-gray-500">{p.eta}</div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                        onClick={() => book(`${p.name} Battery Plan`)}
                      >
                        Book
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-sm text-gray-700">
              <strong>Duration:</strong> Most standard batteries can be fitted within ~30 minutes. The Premium plan can take up to ~1 hour and the Complete plan up to ~2 hours due to polishing requirements. Please speak to our sales care team for more information.
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Watch Care Menu — one card per item */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-10 text-center">
          Watch Care Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {watchCare.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <div className="mt-auto">
                    <Button
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                      onClick={() => book(item.title)}
                    >
                      Book Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Contact/Info Strip — dark section like Home’s tone */}
      <section className="bg-black text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Need Expert Advice?</h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-300 leading-relaxed">
            Our experienced team is here to help with all your jewellery and watch service needs. Contact us today to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
<Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              <a href="tel:+447565455568">CALL US NOW</a>
            </Button>            <Button onClick={() => router.push('/bespoke')}  className="btn-white-outline">
              EMAIL ENQUIRY
            </Button>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-300 text-sm">Mon–Fri: 10:00–18:00</p>
              <p className="text-gray-300 text-sm">Sat: 10:00–17:00</p>
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
      </section>

      {/* Footer — matches Home */}
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
            <p>&copy; 2024 Martin Oliva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
