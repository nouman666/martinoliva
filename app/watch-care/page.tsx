'use client'

import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import Link from "next/link"

const items = [
  { href: "/watch-care/ultrasonic-cleaning", label: "Ultrasonic Cleaning" },
  { href: "/watch-care/resealing", label: "Resealing" },
  { href: "/watch-care/polishing-before-after", label: "Polishing (Before & After)" },
  { href: "/watch-care/water-testing", label: "Water Testing" },
  { href: "/watch-care/regulating", label: "Regulating" },
  { href: "/watch-care/glass-crystal-replacement", label: "Glass (Crystal) Replacement" },
  { href: "/watch-care/crown-and-stem", label: "Crown & Stem" },
  { href: "/watch-care/straps-and-bracelet", label: "Straps & Bracelet" },
  { href: "/watch-care/links-alteration", label: "Links Alteration" },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader active="watch-care" />
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Watch Care</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Everything your timepiece needs—performed by specialists.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className="border rounded-xl p-6 hover:shadow-md transition">
            <div className="text-xl font-semibold mb-2">{i.label}</div>
            <div className="text-gray-600 text-sm">Learn more →</div>
          </Link>
        ))}
      </div>

      <SiteFooter />
    </div>
  )
}
