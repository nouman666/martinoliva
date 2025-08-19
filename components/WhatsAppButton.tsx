'use client'

import { Phone } from 'lucide-react'

type Props = {
  /** Use E.164 format without the + sign, e.g. 447565455568 */
  phone?: string
  /** Pre-filled message text */
  message?: string
  /** Change position if you like: bottom-right by default */
  positionClassName?: string
}

export default function WhatsAppButton({
  phone = '447565455568', // +44 7565 455568
  message = "Hello! I'm interested in your jewellery.",
  positionClassName = 'bottom-4 right-4',
}: Props) {
  const text = encodeURIComponent(message)
  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed ${positionClassName} z-[120] flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all px-4 py-3 group`}
    >
      <span className="relative inline-flex">
        <span className="absolute inline-flex h-3 w-3 rounded-full bg-white/80 opacity-75 -top-1 -right-1 animate-ping" />
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
          <Phone className="w-5 h-5 text-white" />
        </span>
      </span>
      <span className="pr-1 hidden sm:block font-semibold tracking-wide">WhatsApp</span>
    </a>
  )
}
