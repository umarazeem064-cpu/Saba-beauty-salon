export type CurrencyCode = 'PKR' | 'USD' | 'GBP';

export type ServiceCategoryId =
  | 'all'
  | 'hair'
  | 'skincare'
  | 'grooming'
  | 'bridal'
  | 'nails';

export interface SalonService {
  id: string;
  category: Exclude<ServiceCategoryId, 'all'>;
  categoryLabel: string;
  name: string;
  description: string;
  duration: string;
  prices: {
    PKR: number;
    USD: number;
    GBP: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  firstName: string;
  designation: string;
  experienceYears: number;
  specialty: string;
  bio: string;
  image: string;
  imageAlt: string;
  instagramUrl: string;
}

export interface GalleryItem {
  id: string;
  category: 'bridal' | 'hair' | 'skincare' | 'nails';
  categoryLabel: string;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
}

export interface ClientTestimonial {
  id: string;
  name: string;
  serviceTaken: string;
  visitContext: string;
  rating: number;
  quote: string;
  image: string;
  imageAlt: string;
}

export const SALON_INFO = {
  name: 'Saba Beauty Salon',
  tagline: 'Hair, Bridal & Skin Atelier',
  shortAddress: '82 Allama Iqbal Road, Garhi Shahu, Lahore',
  streetAddress: '82 Allama Iqbal Road, Garhi Shahu',
  cityCountry: 'Lahore, Punjab 54000, Pakistan',
  phoneDisplay: '+92 333 4843922',
  phoneHref: 'tel:+923334843922',
  whatsappNumber: '923334843922',
  whatsappDisplay: '+92 333 4843922',
  whatsappHref:
    'https://wa.me/923334843922?text=Hello%20Saba%20Beauty%20Salon%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment.',
  email: 'appointments@sababeautysalon.pk',
  hoursSummary: 'Mon – Sun: 11:00 AM – 9:00 PM',
  hoursDetailed: [
    { days: 'Monday – Thursday', time: '11:00 AM – 9:00 PM' },
    { days: 'Friday', time: '2:00 PM – 9:30 PM' },
    { days: 'Saturday – Sunday', time: '11:00 AM – 9:00 PM' },
  ],
  googleMapsUrl: 'https://maps.app.goo.gl/xnjGUnCMDv4rkH2H9',
  coordinates: '31.5630° N, 74.3461° E',
  establishedYear: 2012,
  experienceYears: 14,
  socials: {
    instagram: 'https://instagram.com/sababeautysalon.lhr',
    facebook: 'https://facebook.com/sababeautysalonlahore',
    tiktok: 'https://tiktok.com/@sababeautysalon',
  },
};

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_salon_interior_1794908492869.jpg',
  alt: 'Luxury travertine reception, illuminated brass mirrors, and styling stations inside Saba Beauty Salon on Allama Iqbal Road, Lahore',
};

export const ABOUT_IMAGE = {
  src: '/src/assets/images/about_salon_craft_1794908493694.jpg',
  alt: 'Senior stylist finishing a glossy silk blowout for a seated client in natural daylight at Saba Beauty Salon',
};

export const SERVICE_CATEGORIES: {
  id: ServiceCategoryId;
  index: string;
  label: string;
}[] = [
  { id: 'all', index: '00', label: 'All Services' },
  { id: 'hair', index: '01', label: 'Hair Styling & Cuts' },
  { id: 'skincare', index: '02', label: 'Skincare & Facials' },
  { id: 'grooming', index: '03', label: 'Grooming & Beard' },
  { id: 'bridal', index: '04', label: 'Bridal & Party Makeup' },
  { id: 'nails', index: '05', label: 'Manicure & Pedicure' },
];

export const SALON_SERVICES: SalonService[] = [
  // 01. Hair Styling & Cuts (Men & Women)
  {
    id: 'precision-haircut',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    name: 'Signature Precision Haircut (Women & Men)',
    description:
      'Face-framing consultation, detoxifying scalp cleanse, tailored wet-and-dry cut, and finished salon styling.',
    duration: '45 mins',
    prices: { PKR: 3500, USD: 13, GBP: 10 },
  },
  {
    id: 'luxury-blowout',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    name: 'Silk Volume Blowout & Waves',
    description:
      'Moisture-locking thermal prep followed by round-brush volume or effortless soft waves with frizz-seal serum.',
    duration: '45 mins',
    prices: { PKR: 2800, USD: 10, GBP: 8 },
  },
  {
    id: 'global-hair-color',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    name: 'Full Global Hair Coloring',
    description:
      'Ammonia-free European cream color customized to your skin undertone with bond-protecting post-color mask.',
    duration: '90 mins',
    prices: { PKR: 12500, USD: 45, GBP: 35 },
  },
  {
    id: 'balayage-highlights',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    name: 'Dimensional Balayage & Highlights',
    description:
      'Hand-painted caramel, mocha, or honey ribbons seamlessly blended for soft grow-out and multi-tonal luminosity.',
    duration: '150 mins',
    prices: { PKR: 22000, USD: 79, GBP: 62 },
  },
  {
    id: 'keratin-treatment',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    name: 'Brazilian Keratin Smoothing Therapy',
    description:
      'Formaldehyde-free protein infusion that eliminates humidity frizz and restores mirror shine for up to 16 weeks.',
    duration: '150 mins',
    prices: { PKR: 24500, USD: 88, GBP: 69 },
  },

  // 02. Skincare & Facials
  {
    id: 'deep-cleansing-facial',
    category: 'skincare',
    categoryLabel: 'Skincare & Facials',
    name: 'Deep Cleansing & Pore Detox Facial',
    description:
      'Ultrasonic exfoliation, gentle steam extraction, soothing botanical clay mask, and lymphatic facial massage.',
    duration: '60 mins',
    prices: { PKR: 5500, USD: 20, GBP: 16 },
  },
  {
    id: 'anti-aging-treatment',
    category: 'skincare',
    categoryLabel: 'Skincare & Facials',
    name: 'Peptide Firming & Anti-Aging Facial',
    description:
      'Collagen-boosting peptide ampoules paired with sculpting gua sha drainage to visibly plump and refine texture.',
    duration: '75 mins',
    prices: { PKR: 8500, USD: 31, GBP: 24 },
  },
  {
    id: 'gold-radiance-facial',
    category: 'skincare',
    categoryLabel: 'Skincare & Facials',
    name: '24K Gold Radiance Bridal Facial',
    description:
      'Luxury illuminating treatment infused with pure 24K gold leaf essence and vitamin C for glass-skin glow.',
    duration: '75 mins',
    prices: { PKR: 10500, USD: 38, GBP: 30 },
  },

  // 03. Grooming & Beard Trimming
  {
    id: 'classic-beard-shave',
    category: 'grooming',
    categoryLabel: 'Grooming & Beard',
    name: 'Classic Straight-Razor Beard Shave & Sculpt',
    description:
      'Architectural beard shaping, crisp cheek and neck line-up using single-use sterile blades and soothing balm.',
    duration: '35 mins',
    prices: { PKR: 1800, USD: 7, GBP: 5 },
  },
  {
    id: 'mustache-styling',
    category: 'grooming',
    categoryLabel: 'Grooming & Beard',
    name: 'Precision Mustache Styling & Trim',
    description:
      'Detailed scissor-and-comb tapering, edge definition, and natural conditioning beard oil finish.',
    duration: '20 mins',
    prices: { PKR: 950, USD: 4, GBP: 3 },
  },
  {
    id: 'hot-towel-ritual',
    category: 'grooming',
    categoryLabel: 'Grooming & Beard',
    name: 'Eucalyptus Hot Towel Grooming Treatment',
    description:
      'Steamed essential-oil towel compress, charcoal scrub cleanse, and cooling post-shave hydration ritual.',
    duration: '40 mins',
    prices: { PKR: 2400, USD: 9, GBP: 7 },
  },

  // 04. Bridal & Party Makeup
  {
    id: 'full-bridal-makeup',
    category: 'bridal',
    categoryLabel: 'Bridal & Party Makeup',
    name: 'Signature Barat & Walima Bridal Makeup',
    description:
      'HD airbrush-finish complexion, custom eye artistry, luxury lashes, dupattas pinning, and hairpiece styling.',
    duration: '180 mins',
    prices: { PKR: 48000, USD: 172, GBP: 135 },
  },
  {
    id: 'engagement-look',
    category: 'bridal',
    categoryLabel: 'Bridal & Party Makeup',
    name: 'Engagement & Nikah Soft-Glam Look',
    description:
      'Luminous rosewood and champagne tones tailored for daytime or evening photography with floral hair styling.',
    duration: '120 mins',
    prices: { PKR: 26000, USD: 94, GBP: 73 },
  },
  {
    id: 'party-styling',
    category: 'bridal',
    categoryLabel: 'Bridal & Party Makeup',
    name: 'Evening Party Makeup & Hair Styling',
    description:
      'Long-wear red-carpet makeup paired with sleek blowout, soft curls, or sculpted chignon updo.',
    duration: '90 mins',
    prices: { PKR: 11500, USD: 41, GBP: 32 },
  },

  // 05. Manicure & Pedicure
  {
    id: 'classic-mani-pedi',
    category: 'nails',
    categoryLabel: 'Manicure & Pedicure',
    name: 'Classic Spa Manicure & Pedicure',
    description:
      'Warm rosewater soak, detailed cuticle refinement, nail shaping, sugar exfoliation, and relaxing massage.',
    duration: '75 mins',
    prices: { PKR: 4800, USD: 17, GBP: 14 },
  },
  {
    id: 'gel-polish',
    category: 'nails',
    categoryLabel: 'Manicure & Pedicure',
    name: 'UV-Cured Gel Polish & Cuticle Care',
    description:
      'Chip-resistant mirror-gloss gel manicure in curated sheer neutrals, classic reds, or French finishes.',
    duration: '50 mins',
    prices: { PKR: 3600, USD: 13, GBP: 10 },
  },
  {
    id: 'spa-foot-treatment',
    category: 'nails',
    categoryLabel: 'Manicure & Pedicure',
    name: 'Botanical Heel Repair & Spa Foot Treatment',
    description:
      'Mineral salt foot bath, gentle callus smoothing, warm paraffin moisture wrap, and reflexology foot massage.',
    duration: '60 mins',
    prices: { PKR: 4200, USD: 15, GBP: 12 },
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'saba-malik',
    name: 'Saba Malik',
    firstName: 'Saba',
    designation: 'Founder & Creative Bridal Director',
    experienceYears: 14,
    specialty: 'Bridal Artistry & Skin Prep',
    bio: 'Trained in Lahore and London, Saba founded the salon in 2012 with a philosophy of luminous, breathable bridal beauty and unhurried client hospitality.',
    image: '/src/assets/images/team_saba_director_1794908493744.jpg',
    imageAlt: 'Portrait of Saba Malik, Founder and Creative Bridal Director at Saba Beauty Salon',
    instagramUrl: 'https://instagram.com/sababeautysalon.lhr',
  },
  {
    id: 'ayesha-tariq',
    name: 'Ayesha Tariq',
    firstName: 'Ayesha',
    designation: 'Senior Hair Stylist & Color Specialist',
    experienceYears: 10,
    specialty: 'Balayage, Keratin & Precision Cuts',
    bio: 'Known across Garhi Shahu and Gulberg for seamless caramel balayage and hair-health-first keratin formulations tailored for South Asian hair textures.',
    image: '/src/assets/images/team_ayesha_stylist_1794908494532.jpg',
    imageAlt: 'Portrait of Ayesha Tariq, Senior Hair Stylist and Color Specialist',
    instagramUrl: 'https://instagram.com/sababeautysalon.lhr',
  },
  {
    id: 'hamza-qureshi',
    name: 'Hamza Qureshi',
    firstName: 'Hamza',
    designation: 'Master Barber & Grooming Specialist',
    experienceYears: 9,
    specialty: 'Beard Sculpting & Hot Towel Rituals',
    bio: 'Specializing in tailored men’s haircuts, clean fade geometry, and traditional eucalyptus hot-towel shaves in our private grooming suite.',
    image: '/src/assets/images/team_hamza_grooming_1794908494520.jpg',
    imageAlt: 'Portrait of Hamza Qureshi, Master Barber and Grooming Specialist',
    instagramUrl: 'https://instagram.com/sababeautysalon.lhr',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'bridal-transformation',
    category: 'bridal',
    categoryLabel: 'Bridal Artistry',
    title: 'Luminous Nikah & Barat Bridal Look',
    caption: 'Soft bronze smokey eyes, rosewood lip color, and seamless veil pinning.',
    image: '/src/assets/images/gallery_bridal_glam_1794908500404.jpg',
    imageAlt: 'Close-up editorial photograph of South Asian bridal makeup with gold jewelry and ivory veil',
  },
  {
    id: 'caramel-balayage',
    category: 'hair',
    categoryLabel: 'Hair & Color',
    title: 'Dimensional Caramel Espresso Balayage',
    caption: 'Bond-protected hand-painted highlights finished with a signature silk blowout.',
    image: '/src/assets/images/gallery_balayage_hair_1794908496577.jpg',
    imageAlt: 'Glossy caramel and espresso balayage waves styled inside Saba Beauty Salon',
  },
  {
    id: 'facial-sanctuary',
    category: 'skincare',
    categoryLabel: 'Skincare & Spa',
    title: 'Private Botanical Facial Suite',
    caption: 'Serene travertine treatment space stocked with clinical serums and steamed cotton linens.',
    image: '/src/assets/images/gallery_skincare_spa_1794908496926.jpg',
    imageAlt: 'Serene luxury facial suite with amber botanical serums and rolled ivory towels',
  },
  {
    id: 'nail-atelier',
    category: 'nails',
    categoryLabel: 'Nail Studio',
    title: 'Sheer Rose-Nude Gel Manicure',
    caption: 'Sterilized brass cuticle tools, camellia oil nourishment, and mirror-shine gel finish.',
    image: '/src/assets/images/gallery_manicure_studio_1794908497306.jpg',
    imageAlt: 'Manicured hands with sheer rose-nude gel polish resting on marble table with brass tools',
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'zainab-review',
    name: 'Zainab Farooq',
    serviceTaken: 'Barat Bridal Makeup & Pre-Bridal Gold Facial',
    visitContext: 'Bridal Client · Garhi Shahu, Lahore',
    rating: 5,
    quote:
      'I booked my Barat look and pre-bridal 24K Gold Facial with Saba after visiting their Allama Iqbal Road studio. My skin never felt cakey, the dupatta setting held flawlessly for eight hours, and the hygiene standards were immaculate.',
    image: '/src/assets/images/client_zainab_portrait_1794908498391.jpg',
    imageAlt: 'Portrait of satisfied bridal client Zainab Farooq',
  },
  {
    id: 'maham-review',
    name: 'Maham Sikandar',
    serviceTaken: 'Caramel Balayage & Keratin Smoothing',
    visitContext: 'Regular Client · 3 Years',
    rating: 5,
    quote:
      'Before coming to Ayesha, box dye left my hair dry and brassy. After two sessions of her bond-protected balayage and Brazilian keratin treatment, my waves stay glossy even in Lahore monsoon humidity.',
    image: '/src/assets/images/client_maham_portrait_1794908498711.jpg',
    imageAlt: 'Portrait of satisfied hair color client Maham Sikandar',
  },
  {
    id: 'bilal-review',
    name: 'Bilal Chaudhry',
    serviceTaken: 'Precision Haircut & Hot Towel Beard Sculpt',
    visitContext: 'Grooming Suite Client · Lahore',
    rating: 5,
    quote:
      'Finally a grooming suite near Garhi Shahu where appointments actually start on time. Hamza takes the time to match the beard taper to your jawline, and the eucalyptus hot-towel finish feels like a five-star spa.',
    image: '/src/assets/images/client_bilal_portrait_1794908500837.jpg',
    imageAlt: 'Portrait of satisfied grooming client Bilal Chaudhry',
  },
];

export function formatPrice(amount: number, currency: CurrencyCode): string {
  if (currency === 'PKR') {
    return `PKR ${amount.toLocaleString('en-PK')}`;
  }
  if (currency === 'USD') {
    return `$${amount.toLocaleString('en-US')}`;
  }
  return `£${amount.toLocaleString('en-GB')}`;
}
