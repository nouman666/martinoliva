import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

// ⬇️ Add these two imports
import { CartProvider } from './cart/page'
import CartDrawer from '@/components/CartDrawer'

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
        {/* Global cart context available on every page */}
        <CartProvider>
          {children}
          {/* Single, site-wide mini-cart drawer */}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
