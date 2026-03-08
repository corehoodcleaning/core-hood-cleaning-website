import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.corehoodcleaning.com'),
  title: {
    default: '#1 Hood Cleaning San Diego | NFPA 96 Certified | Core Hood Cleaning',
    template: '%s | Core Hood Cleaning San Diego'
  },
  description: 'San Diego\'s top-rated commercial hood cleaning company. NFPA 96 certified, 40+ 5-star reviews, same-day service. Serving all of San Diego County. Call (858) 361-2570.',
  keywords: ['hood cleaning San Diego', 'commercial kitchen exhaust cleaning', 'NFPA 96', 'restaurant hood cleaning', 'grease duct cleaning San Diego'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.corehoodcleaning.com',
    siteName: 'Core Hood Cleaning',
    title: '#1 Hood Cleaning San Diego | NFPA 96 Certified',
    description: 'San Diego\'s top-rated commercial hood cleaning. NFPA 96 certified, 40+ 5-star reviews, same-day service.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.corehoodcleaning.com",
  "name": "Core Hood Cleaning",
  "alternateName": "Core Services Hood Cleaning",
  "description": "San Diego's premier NFPA 96 certified commercial kitchen hood cleaning company serving all of San Diego County.",
  "url": "https://www.corehoodcleaning.com",
  "telephone": "+18583612570",
  "email": "chase@corehoodcleaning.com",
  "priceRange": "$$",
  "image": "https://www.corehoodcleaning.com/images/core-hood-cleaning-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5284 Eastgate Mall",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "postalCode": "92121",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.8801,
    "longitude": -117.2088
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 32.8801,
      "longitude": -117.2088
    },
    "geoRadius": "80000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hood Cleaning Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Commercial Hood Cleaning"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Filter Exchange Program"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Hood Cleaning"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "NFPA 96 Compliance Inspection"}}
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "40",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.google.com/maps/place/Core+Hood+Cleaning"
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-8EL75F65HH"></script>
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8EL75F65HH');
      `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
