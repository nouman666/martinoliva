'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Ctx = {
  open: boolean
  openSearch: () => void
  closeSearch: () => void
}

const SearchCtx = createContext<Ctx | null>(null)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openSearch = () => setOpen(true)
  const closeSearch = () => setOpen(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(v => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const value = useMemo(() => ({ open, openSearch, closeSearch }), [open])
  return <SearchCtx.Provider value={value}>{children}</SearchCtx.Provider>
}

export function useSearch() {
  const ctx = useContext(SearchCtx)
  if (!ctx) throw new Error('useSearch must be used within <SearchProvider>')
  return ctx
}

/** Also export default to avoid import mismatches */
export default SearchProvider
