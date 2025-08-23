'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Search,
  ShoppingBag,
  ChevronDown,
} from 'lucide-react'

type Props = {
  active?: string
  onCartClick?: () => void
  onSearchClick?: () => void
}

const watchCareItems = [
  { href: '/watch-care/Ultrasonic Cleaning', label: 'Ultrasonic Cleaning' },
  { href: '/watch-care/Resealing', label: 'Resealing' },
  { href: '/watch-care/Polishing (Before & After)', label: 'Polishing (Before & After)' },
  { href: '/watch-care/Water Testing', label: 'Water Testing' },
  { href: '/watch-care/Regulating', label: 'Regulating' },
  { href: '/watch-care/Glass (Crystal) Replacement', label: 'Glass (Crystal) Replacement' },
  { href: '/watch-care/Crown & Stem', label: 'Crown & Stem' },
  { href: '/watch-care/Straps & Bracelet', label: 'Straps & Bracelet' },
  { href: '/watch-care/Links Alteration', label: 'Links Alteration' },
]

export default function SiteHeader({ active, onCartClick, onSearchClick }: Props) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <>
      {/* Top strip */}
      <div className="bg-gradient-to-r from-black to-yellow-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:studio@martinoliva.co.uk" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>studio@martinoliva.co.uk</span>
            </a>
            <a href="tel:+447565455568" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+44 7565 455568</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com/martinoliva" target="_blank" rel="noreferrer">
              <Facebook className="w-4 h-4 hover:text-gray-300 transition-colors" />
            </a>
            <a href="https://instagram.com/martinoliva" target="_blank" rel="noreferrer">
              <Instagram className="w-4 h-4 hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1 p-2"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-yellow-600" />
              <div className="w-6 h-0.5 bg-yellow-600" />
              <div className="w-6 h-0.5 bg-yellow-600" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-xl md:text-2xl font-bold tracking-wider leading-tight">
                <span className="text-black">MARTIN OLIVA</span>
                <div className="text-[10px] md:text-xs text-gray-600 tracking-[0.3em] font-light">
                  The Total Watch and<br className="hidden sm:block" /> Jewellery Care Centre
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <NavLink href="/" label="Home" active={active} pathname={pathname} />
              <NavLink href="/diamonds" label="Diamonds" active={active} pathname={pathname} />

              <Dropdown
                label="Jewellery"
                isActive={pathname?.startsWith('/jewellery') || active === 'jewellery'}
                openKey="jewellery"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              >
                <DropdownLink href="/jewellery" label="All Jewellery" />
                <DropdownLink href="/engagement-rings" label="Engagement Rings" />
                <DropdownLink href="/wedding-bands" label="Wedding Bands" />
              </Dropdown>

              <NavLink href="/watches" label="Watches" active={active} pathname={pathname} />

              <Dropdown
                label="Watch Care"
                isActive={pathname?.startsWith('/watch-care') || active === 'watch-care'}
                openKey="watch-care"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              >
                {watchCareItems.map(i => (
                  <DropdownLink key={i.href} href={i.href} label={i.label} />
                ))}
              </Dropdown>

              <NavLink href="/bespoke" label="Bespoke" active={active} pathname={pathname} />
              <NavLink href="/services" label="Services" active={active} pathname={pathname} />
              {/* NOTE: If you have a /contact route, change href to "/contact" */}
              <NavLink href="/sale" label="Contact" active={active} pathname={pathname} className="text-red-600 hover:text-red-700" />
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3 md:gap-4">
              <Search
                className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600"
                onClick={onSearchClick}
                aria-label="Open search"
              />
              <ShoppingBag
                className="w-5 h-5 text-black cursor-pointer hover:text-yellow-600"
                onClick={onCartClick}
                aria-label="Open cart"
              />
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-yellow-200">
              <nav className="flex flex-col space-y-3 pt-4">
                <MobileLink href="/" label="Home" />
                <MobileLink href="/diamonds" label="Diamonds" />
                <Disclosure title="Jewellery">
                  <MobileLink href="/jewellery" label="All Jewellery" />
                  <MobileLink href="/engagement-rings" label="Engagement Rings" />
                  <MobileLink href="/wedding-bands" label="Wedding Bands" />
                </Disclosure>
                <MobileLink href="/watches" label="Watches" />
                <Disclosure title="Watch Care">
                  {watchCareItems.map(i => (
                    <MobileLink key={i.href} href={i.href} label={i.label} />
                  ))}
                </Disclosure>
                <MobileLink href="/bespoke" label="Bespoke" />
                <MobileLink href="/services" label="Services" />
                <MobileLink href="/sale" label="Contact" className="text-red-600" />
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

function NavLink({
  href,
  label,
  active,
  className,
  pathname,
}: {
  href: string
  label: string
  active?: string
  className?: string
  pathname?: string | null
}) {
  const isActive =
    (active && label.toLowerCase().includes(active)) ||
    (pathname && pathname === href)

  return (
    <Link
      href={href}
      className={`text-black hover:text-yellow-600 transition-colors font-medium ${
        isActive ? 'border-b-2 border-yellow-600 pb-1 text-yellow-700' : ''
      } ${className || ''}`}
    >
      {label}
    </Link>
  )
}

/** Debounced + bridged dropdown: opens on hover/click, hides when pointer leaves the whole area */
function Dropdown({
  label,
  children,
  isActive,
  openKey,
  openMenu,
  setOpenMenu,
}: {
  label: string
  children: React.ReactNode
  isActive?: boolean
  openKey: string
  openMenu: string | null
  setOpenMenu: (v: string | null) => void
}) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isOpen = openMenu === openKey

  const setOpenDebounced = (next: boolean) => {
    if (timer.current) clearTimeout(timer.current)
    // slight delay to smooth tiny pointer jitters; still hides promptly
    timer.current = setTimeout(() => setOpenMenu(next ? openKey : null), next ? 40 : 80)
  }

  return (
    <div
      className="relative"
      onPointerEnter={() => setOpenDebounced(true)}
      onPointerLeave={() => setOpenDebounced(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1 font-medium ${
          isActive ? 'text-yellow-700' : 'text-black'
        } hover:text-yellow-600`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setOpenMenu(isOpen ? null : openKey)}
      >
        {label} <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Hover bridge: removes the tiny gap between button and panel */}
      <div className="absolute left-0 right-0 h-2" style={{ top: '100%' }} aria-hidden />

      {isOpen && (
        <div
          role="menu"
          className="absolute left-0 mt-3 w-72 bg-white border border-gray-100 rounded-lg shadow-lg p-2 z-50"
        >
          <div className="grid grid-cols-1">{children}</div>
        </div>
      )}
    </div>
  )
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="px-3 py-2 rounded hover:bg-yellow-50 text-sm text-gray-800 block">
      {label}
    </Link>
  )
}

function MobileLink({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`text-black hover:text-yellow-600 transition-colors font-medium border-l-4 border-transparent hover:border-yellow-600 pl-4 ${
        className || ''
      }`}
    >
      {label}
    </Link>
  )
}

function Disclosure({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between pl-4 pr-2 py-2 text-left w-full font-medium text-black hover:text-yellow-600"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="ml-4 space-y-2">{children}</div>}
    </div>
  )
}
