import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MARTIN OLIVA</h3>
            <p className="text-gray-400 mb-4">The Total Watch and <br/> Jewellery Care Centre</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating exceptional jewelry pieces that celebrate life's most precious moments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/jewellery" className="hover:text-white transition-colors">Jewellery</Link></li>
              <li><Link href="/engagement-rings" className="hover:text-white transition-colors">Engagement Rings</Link></li>
              <li><Link href="/wedding-bands" className="hover:text-white transition-colors">Wedding Bands</Link></li>
              <li><Link href="/diamonds" className="hover:text-white transition-colors">Diamonds</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Watch Care</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/watch-care/ultrasonic-cleaning" className="hover:text-white">Ultrasonic Cleaning</Link></li>
              <li><Link href="/watch-care/resealing" className="hover:text-white">Resealing</Link></li>
              <li><Link href="/watch-care/polishing-before-after" className="hover:text-white">Polishing</Link></li>
              <li><Link href="/watch-care/water-testing" className="hover:text-white">Water Testing</Link></li>
              <li><Link href="/watch-care/regulating" className="hover:text-white">Regulating</Link></li>
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
  )
}
