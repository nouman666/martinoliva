'use client'
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"

export default function Page(){{
  return (<div className="min-h-screen bg-white">
    <SiteHeader active="watch-care"/>
    <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{{{ backgroundImage: "url('/watchcare/resealing-hero.jpg')" }}}}>
        <div className="absolute inset-0 bg-black/50"/>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Resealing</h1>
        <p className="text-base md:text-lg opacity-90">Restore water resistance after battery changes or case opening.</p>
      </div>
    </section>
    <main className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-gray-100">
          <img src="/watchcare/resealing-detail.jpg" alt="Resealing example" className="w-full h-full object-cover"/>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Keep moisture out</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Gaskets harden over time. We replace caseback, crown and glass gaskets as required and pressure‑test to manufacturer‑specified ratings where applicable.</p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6"><li>New caseback, crown & glass seals</li><li>Lubrication with silicone grease</li><li>Pressure/water resistance test report</li></ul>
          <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-900">
            <strong>Turnaround:</strong> 24–48 hours<br/><strong>From:</strong> From £45
          </div>
        </div>
      </div>
    </main>
    <SiteFooter/>
  </div>)
}}
