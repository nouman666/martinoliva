'use client'

import { Phone } from 'lucide-react'

type Props = {
  phone?: string           // E.164 without +
  message?: string
  positionClassName?: string
}

export default function WhatsAppButton({
  phone = '447565455568',
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
      className={`fixed ${positionClassName} z-[120] bg-[#25D366] text-white 
                  rounded-full shadow-lg hover:shadow-xl transition-all
                  w-14 h-14 flex items-center justify-center relative`}
    >
      {/* ping dot */}
      <span className="absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full bg-white/80 opacity-75 animate-ping" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white" />

      <Phone className="w-6 h-6" />
    </a>
  )
}
