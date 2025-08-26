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
  { id: 1, name: "Round Brilliant Diamond", carat: "1.50", cut: "Excellent", color: "D", clarity: "VVS1", price: "£8,500", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" ,href: "/wedding-bands"},
    { id: 2, name: "Princess Cut Diamond",  carat: "1.25", cut: "Very Good", color: "E", clarity: "VS1",  price: "£6,800", image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Emerald Cut Diamond",   carat: "2.00", cut: "Excellent", color: "F", clarity: "VVS2", price: "£12,200", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Oval Diamond",           carat: "1.75", cut: "Excellent", color: "D", clarity: "VS2",  price: "£9,900", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Cushion Cut Diamond",    carat: "1.80", cut: "Very Good", color: "G", clarity: "VS1",  price: "£8,200", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Pear Shape Diamond",     carat: "1.60", cut: "Excellent", color: "E", clarity: "VVS1", price: "£10,500", image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=600&q=80" },

  {
      id: 7,
      name: "Classic Solitaire",
      style: "Solitaire",
      metal: "Platinum",
      diamond: "1.0ct Round",
      price: "£4,500",
      originalPrice: null,
      isNew: true,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      name: "Vintage Halo",
      style: "Halo",
      metal: "18k White Gold",
      diamond: "0.75ct Round",
      price: "£3,200",
      originalPrice: null,
      isNew: false,
      image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      name: "Three Stone Classic",
      style: "Three Stone",
      metal: "18k Yellow Gold",
      diamond: "1.25ct Emerald",
      price: "£6,800",
      originalPrice: null,
      isNew: false,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 10,
      name: "Art Deco Inspired",
      style: "Vintage",
      metal: "Platinum",
      diamond: "1.5ct Cushion",
      price: "£8,900",
      originalPrice: null,
      isNew: true,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 11,
      name: "Modern Twist",
      style: "Contemporary",
      metal: "18k Rose Gold",
      diamond: "1.0ct Oval",
      price: "£4,200",
      originalPrice: "£5,200",
      isNew: false,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 12,
      name: "Pavé Band Solitaire",
      style: "Solitaire",
      metal: "Platinum",
      diamond: "2.0ct Round",
      price: "£12,500",
      originalPrice: null,
      isNew: false,
      image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  { id: 13, name: 'Classic Diamond Eternity', metal: 'Platinum',       diamonds: '0.50ct Total', width: '2.5mm', price: '£2,800', image: '/diamond-eternity-band.png' },
      { id: 14, name: 'Vintage Milgrain Band',    metal: '18k Yellow Gold', diamonds: '0.25ct Total', width: '3mm',   price: '£1,650', image: '/vintage-milgrain-band.png' },
      { id: 15, name: 'Modern Curved Band',       metal: '18k White Gold',  diamonds: '0.35ct Total', width: '2mm',   price: '£2,200', image: '/modern-curved-band.png' },

     { id: 16, name: 'Classic Comfort Fit',      metal: 'Platinum',        diamonds: 'None',          width: '6mm',  price: '£1,200', image: '/mens-comfort-fit-band.png' },
      { id: 17, name: 'Brushed Titanium',         metal: 'Titanium',        diamonds: 'None',          width: '7mm',  price: '£450',   image: '/brushed-titanium-band.png' },
      { id: 18, name: 'Diamond Channel Set',      metal: '18k White Gold',  diamonds: '0.75ct Total',  width: '8mm',  price: '£3,500', image: '/mens-diamond-channel-band.png' },

     { id: 19, name: 'His & Hers Classic Set',   metal: 'Platinum',        diamonds: '0.25ct (Hers)', description: 'Matching comfort fit bands', price: '£2,400', image: '/his-hers-classic-set.png' },
      { id: 20, name: 'Modern Matching Set',      metal: '18k Rose Gold',   diamonds: '0.40ct (Hers)', description: 'Contemporary design',        price: '£2,850', image: '/modern-matching-set.png' },

   { id: 21, name: 'Classic Dress Watch', brand: 'Martin Oliva', movement: 'Swiss Automatic', case: '18k Gold, 40mm', price: '£8,500',  isLimited: false, image: '/classic-dress-watch.png' },
    { id: 22, name: 'Diamond Bezel Ladies', brand: 'Martin Oliva', movement: 'Swiss Quartz',    case: 'Steel & Diamonds, 32mm', price: '£12,200', isLimited: false, image: '/diamond-bezel-ladies-watch.png' },
    { id: 23, name: 'Limited Edition Chronograph', brand: 'Martin Oliva', movement: 'Swiss Chronograph', case: 'Platinum, 42mm', price: '£25,000', isLimited: true,  image: '/limited-chronograph.png' },
    { id: 24, name: 'Vintage Inspired', brand: 'Martin Oliva', movement: 'Manual Wind',        case: 'Rose Gold, 38mm', price: '£6,800',  isLimited: false, image: '/vintage-inspired-watch.png' },
    { id: 25, name: 'Sports Luxury', brand: 'Martin Oliva', movement: 'Swiss Automatic',       case: 'Steel & Ceramic, 44mm', price: '£4,200',  isLimited: false, image: '/sports-luxury-watch.png' },
    { id: 26, name: 'Elegant Mother of Pearl', brand: 'Martin Oliva', movement: 'Swiss Quartz', case: 'White Gold & Diamonds, 30mm', price: '£15,500', isLimited: false, image: '/mother-of-pearl-watch.png' },
  // --- Watches (examples)
  { id: 'watch-1', name: 'Classic Dress Watch', description: 'Swiss Automatic • 18k Gold • 40mm', price: '£8,500', image: '/classic-dress-watch.png', href: '/watches' },
  { id: 'watch-2', name: 'Diamond Bezel Ladies', description: 'Swiss Quartz • Steel & Diamonds • 32mm', price: '£12,200', image: '/diamond-bezel-ladies-watch.png', href: '/watches' },

  // --- Jewellery (examples)
 
  { id: 27, name: "Gold Necklace",        price: "£3,2 0 0", image: "/gold-necklace.png" },
    { id: 28, name: "Diamond Earrings",     price: "£4,500", image: "/diamond-earrings.png" },
    { id: 29, name: "Platinum Bracelet",    price: "£6,800", image: "/platinum-bracelet.png" },
  
  // Add your Diamonds / Engagement items here too…
]
