export type CatalogItem = {
  id: string | number
  name: string
  description: string
  price?: string
  image?: string
  href: string // where to navigate on click
}

export const catalog: CatalogItem[] = [
  // --- Wedding Bands (examples)
  { id: 13, name: 'Classic Diamond Eternity', description: 'Platinum • 0.50ct • 2.5mm', price: '£2,800', image: '/diamond-eternity-band.png', href: '/wedding-bands' },
  { id: 14, name: 'Vintage Milgrain Band', description: '18k Yellow Gold • 0.25ct • 3mm', price: '£1,650', image: '/vintage-milgrain-band.png', href: '/wedding-bands' },
  { id: 15, name: 'Modern Curved Band', description: '18k White Gold • 0.35ct • 2mm', price: '£2,200', image: '/modern-curved-band.png', href: '/wedding-bands' },

  // --- Watches (examples)
  { id: 'watch-1', name: 'Classic Dress Watch', description: 'Swiss Automatic • 18k Gold • 40mm', price: '£8,500', image: '/classic-dress-watch.png', href: '/watches' },
  { id: 'watch-2', name: 'Diamond Bezel Ladies', description: 'Swiss Quartz • Steel & Diamonds • 32mm', price: '£12,200', image: '/diamond-bezel-ladies-watch.png', href: '/watches' },

  // --- Jewellery (examples)
  { id: 'jewel-27', name: 'Gold Necklace', description: 'Fine gold necklace', price: '£3,200', image: '/gold-necklace.png', href: '/jewellery' },
  { id: 'jewel-28', name: 'Diamond Earrings', description: 'Brilliant cut diamond studs', price: '£4,500', image: '/diamond-earrings.png', href: '/jewellery' },
  { id: 'jewel-29', name: 'Platinum Bracelet', description: 'Hand-finished platinum bracelet', price: '£6,800', image: '/platinum-bracelet.png', href: '/jewellery' },

  // Add your Diamonds / Engagement items here too…
]
