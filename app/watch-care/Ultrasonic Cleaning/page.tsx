'use client'

import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import Image from "next/image"
import { Check } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader active="watch-care" />

      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/watchcare/ultrasonic-hero.jpg"
            alt="Ultrasonic Cleaning hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Ultrasonic Cleaning</h1>
          <p className="text-base md:text-lg opacity-90">Deep-clean to lift dirt, oils and debris from your watch without abrasion.</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-gray-100">
            <Image src="/watchcare/ultrasonic-detail.jpg" alt="Ultrasonic Cleaning example" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Why ultrasonic cleaning?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A professional ultrasonic bath removes grime from bracelets and cases using microscopic vibrations. It restores lustre while being gentle on metal and stones when performed by a professional.
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 text-yellow-600" /> <span>Removes stubborn dirt from hard‑to‑reach links</span></li>
<li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 text-yellow-600" /> <span>Safe for most metals and gems when prepared correctly</span></li>
<li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 text-yellow-600" /> <span>Finishes with rinse, dry and light inspection</span></li>
            </ul>
            <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-900">
              <strong>Turnaround:</strong> Same day on most bracelets<br/>
              <strong>From:</strong> £25
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
