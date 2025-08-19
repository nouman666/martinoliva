'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
  preset: { category: 'Service' | 'Watch Care' | 'Battery Plan'; title: string; price?: string } | null
}

export default function ServiceEnquiryModal({ open, onClose, preset }: Props) {
  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')

  if (!open || !preset) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/service-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          notes,
          category: preset.category,
          itemTitle: preset.title,
          priceFrom: preset.price ?? '',
          sourcePage: 'Services',
        }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      // simple success state:
      alert('Thanks! We’ve received your enquiry and sent a confirmation.')
      onClose()
      // reset:
      setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setNotes('')
    } catch (err) {
      console.error(err)
      alert('Sorry, something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-600">{preset.category}</p>
            <h3 className="text-lg font-semibold text-black">{preset.title}</h3>
            {preset.price && <p className="text-sm text-gray-500">Guide price: {preset.price}</p>}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-black">First name</label>
              <input className="mt-1 w-full border rounded-md p-2" value={firstName} onChange={e=>setFirstName(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm text-black">Last name</label>
              <input className="mt-1 w-full border rounded-md p-2" value={lastName} onChange={e=>setLastName(e.target.value)} required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-black">Email</label>
              <input type="email" className="mt-1 w-full border rounded-md p-2" value={email} onChange={e=>setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm text-black">Phone</label>
              <input className="mt-1 w-full border rounded-md p-2" value={phone} onChange={e=>setPhone(e.target.value)} />
            </div>
          </div>

          <div>
            <label className="block text-sm text-black">Notes</label>
            <textarea className="mt-1 w-full border rounded-md p-2 min-h-[100px]" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Any specifics (brand, size, deadline, etc.)" />
          </div>

          {/* Hidden/readonly context that also gets submitted */}
          <input type="hidden" name="category" value={preset.category} />
          <input type="hidden" name="itemTitle" value={preset.title} />
          <input type="hidden" name="sourcePage" value="Services" />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition-colors disabled:opacity-60"
          >
            {loading ? 'Sending…' : 'Send Enquiry'}
          </button>
          <p className="text-xs text-gray-500 text-center">We’ll confirm availability and next steps by email.</p>
        </form>
      </div>
    </div>
  )
}
