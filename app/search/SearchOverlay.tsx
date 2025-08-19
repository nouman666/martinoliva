'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { catalog } from './catalog'
import { useSearch } from './SearchContext'

export default function SearchOverlay() {
  const router = useRouter()
  const { open, closeSearch } = useSearch()
  const [q, setQ] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0)
    } else {
      setQ('')
    }
  }, [open])

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return []
    return catalog.filter((item) => {
      const hay = `${item.id} ${item.name} ${item.description}`.toLowerCase()
      return hay.includes(needle)
    })
  }, [q])

  const go = (href: string) => {
    closeSearch()
    router.push(href)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 p-4 sm:p-8" onClick={closeSearch}>
      <div className="mx-auto max-w-2xl rounded-xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Search bar */}
        <div className="p-3 border-b">
          <Input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by id, name, or description…"
            className="h-11 text-base"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && results[0]) go(results[0].href)
              if (e.key === 'Escape') closeSearch()
            }}
          />
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-auto">
          {q && results.length === 0 && (
            <div className="p-6 text-sm text-gray-500">No matches for “{q}”.</div>
          )}

          {results.length > 0 && (
            <ul className="divide-y">
              {results.map((r) => (
                <li key={`${r.href}-${r.id}`}>
                  <button
                    className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 text-left"
                    onClick={() => go(r.href)}
                  >
                    <div className="w-14 h-14 relative rounded-md overflow-hidden bg-gray-100 shrink-0">
                      {r.image ? (
                        <Image src={r.image} alt={r.name} fill className="object-cover" />
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-gray-500">#{r.id}</div>
                      <div className="font-medium text-black truncate">{r.name}</div>
                      <div className="text-sm text-gray-600 truncate">{r.description}</div>
                    </div>
                    {r.price && <div className="ml-auto font-semibold">{r.price}</div>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        <div className="p-3 border-t text-xs text-gray-500 flex items-center justify-between">
          <span>Press <kbd className="px-1.5 py-0.5 border rounded">Esc</kbd> to close</span>
          <span>Tip: <kbd className="px-1.5 py-0.5 border rounded">⌘</kbd>/<kbd className="px-1.5 py-0.5 border rounded">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 border rounded">K</kbd></span>
        </div>
      </div>
    </div>
  )
}
