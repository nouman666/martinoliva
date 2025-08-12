'use client'

import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

export type CartItem = {
  id: string
  name: string
  price: number   // store numeric for maths
  image?: string
  attributes?: Record<string, string>
  qty: number
}

type State = { items: CartItem[] }
type Action =
  | { type: 'ADD'; payload: CartItem }
  | { type: 'REMOVE'; id: string }
  | { type: 'SET_QTY'; id: string; qty: number }
  | { type: 'CLEAR' }

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const i = state.items.findIndex(x => x.id === action.payload.id)
      if (i >= 0) {
        const copy = [...state.items]
        copy[i] = { ...copy[i], qty: copy[i].qty + action.payload.qty }
        return { items: copy }
      }
      return { items: [...state.items, action.payload] }
    }
    case 'REMOVE':
      return { items: state.items.filter(x => x.id !== action.id) }
    case 'SET_QTY':
      return {
        items: state.items.map(x => x.id === action.id ? { ...x, qty: Math.max(1, action.qty) } : x)
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

type CartCtx = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
  count: number
  subtotal: number
  // mini-drawer controls
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('mo_cart_v1')
      if (raw) {
        const parsed = JSON.parse(raw) as State
        if (parsed?.items) {
          parsed.items.forEach(it => dispatch({ type: 'ADD', payload: it })) // merges cleanly
        }
      }
    } catch {}
    setHydrated(true)
  }, [])

  // persist
  useEffect(() => {
    if (!hydrated) return
    localStorage.setItem('mo_cart_v1', JSON.stringify(state))
  }, [state, hydrated])

  const value = useMemo<CartCtx>(() => {
    const subtotal = state.items.reduce((s, x) => s + x.price * x.qty, 0)
    const count = state.items.reduce((s, x) => s + x.qty, 0)
    return {
      items: state.items,
      addItem: (item) => dispatch({ type: 'ADD', payload: item }),
      removeItem: (id) => dispatch({ type: 'REMOVE', id }),
      setQty: (id, qty) => dispatch({ type: 'SET_QTY', id, qty }),
      clear: () => dispatch({ type: 'CLEAR' }),
      count, subtotal,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen(v => !v),
    }
  }, [state, isOpen])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
