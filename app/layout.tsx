import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import WhatsAppButton from '@/components/WhatsAppButton'
import './globals.css'

// Cart (client)
import { CartProvider } from './cart/page'
import CartDrawer from '@/components/CartDrawer'

// 🔎 Search (client)
import Providers from './providers'                 // <- make sure app/providers.tsx exists with `export default`
import SearchOverlay from './search/SearchOverlay'  // <- make sure this file exists

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Martin Oliva - Luxury Jewelry | London',
  description: 'Luxury jewelry, engagement rings, wedding bands, and bespoke pieces by Martin Oliva London',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        {/* Global client providers */}
        <Providers>
          <CartProvider>
            {children}
            {/* Site-wide drawers/overlays mounted once */}
            <CartDrawer />
            <SearchOverlay />
          </CartProvider>
        </Providers>

        <WhatsAppButton
          phone="447565455568"
          message="Hello! I'd like to chat with Martin Oliva."
        />
      </body>
    </html>
  )
}
