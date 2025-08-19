'use client'

import SearchProvider from './search/SearchContext'
// If you also have cart context, wrap it here too:
// import { CartProvider, CartDrawer } from '@/app/cart/page'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      {children}
      {/* <CartDrawer />  // if you mount a global cart drawer */}
    </SearchProvider>
  )
}
