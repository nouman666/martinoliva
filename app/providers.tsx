'use client'

import SearchProvider from './search/SearchContext'
// If you also have a CartProvider, you can compose here:
// import { CartProvider, CartDrawer } from '@/app/cart/page'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      {children}
      {/* If you mount global drawers/overlays, include them after children */}
      {/* <CartDrawer /> */}
    </SearchProvider>
  )
}
