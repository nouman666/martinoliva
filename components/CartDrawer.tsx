'use client'

import { X, Trash2, Plus, Minus } from 'lucide-react'
import { useCart } from '@/app/cart-context'
import { Button } from '@/components/ui/button'

export default function CartDrawer() {
  const { isOpen, close, items, setQty, removeItem, subtotal, clear } = useCart()
  return (
    <div className={`fixed inset-0 z-[100] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-black/40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={close} aria-label="Close" className="p-2 hover:opacity-70"><X className="w-5 h-5" /></button>
        </div>

        <div className="h-[calc(100%-180px)] overflow-auto p-4 space-y-4">
          {items.length === 0 && (
            <div className="text-center text-gray-500 py-12">Your cart is empty.</div>
          )}

          {items.map(item => (
            <div key={item.id} className="flex gap-3 border rounded-lg p-3">
              <img src={item.image || '/placeholder.svg'} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    {item.attributes && (
                      <div className="text-xs text-gray-500">
                        {Object.entries(item.attributes).map(([k,v]) => `${k}: ${v}`).join(' · ')}
                      </div>
                    )}
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center border rounded">
                    <button onClick={() => setQty(item.id, item.qty - 1)} className="p-1.5"><Minus className="w-4 h-4" /></button>
                    <div className="px-3 min-w-[2ch] text-center">{item.qty}</div>
                    <button onClick={() => setQty(item.id, item.qty + 1)} className="p-1.5"><Plus className="w-4 h-4" /></button>
                  </div>
                  <div className="font-semibold">£{(item.price * item.qty).toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-600">Subtotal</div>
            <div className="text-lg font-semibold">£{subtotal.toLocaleString()}</div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Checkout</Button>
            <Button variant="outline" onClick={clear} className="flex-1">Clear</Button>
          </div>
        </div>
      </aside>
    </div>
  )
}
