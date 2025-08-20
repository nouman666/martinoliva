import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import WhatsAppButton from '@/components/WhatsAppButton'
import './globals.css'

// Cart
import { CartProvider } from './cart/page'
import CartDrawer from '@/components/CartDrawer'

// Search — use the provider directly (no Providers wrapper)
import SearchProvider from './search/SearchContext'
import SearchOverlay from './search/SearchOverlay'

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
        {/* Mount global client providers once */}
        <SearchProvider>
          <CartProvider>
            {children}
            {/* Site-wide drawers/overlays mounted once */}
            <CartDrawer />
            <SearchOverlay />
          </CartProvider>
        </SearchProvider>

        <WhatsAppButton
          phone="447565455568"
          message="Hello! I'd like to chat with Martin Oliva."
        />
      </body>
    </html>
  )
}
