import { MetadataRoute } from 'next'

const LOCATIONS = [
  'la-jolla','pacific-beach','mission-valley','downtown-san-diego','chula-vista',
  'oceanside','carlsbad','escondido','el-cajon','vista','san-marcos','national-city',
  'la-mesa','coronado','encinitas','del-mar','miramar','rancho-bernardo','poway','santee'
]

const BLOG_POSTS = [
  { slug: 'how-often-should-restaurant-hood-be-cleaned', date: '2025-02-01' },
  { slug: 'what-is-nfpa-96', date: '2025-01-01' },
  { slug: 'restaurant-fire-prevention-san-diego', date: '2025-01-01' },
  { slug: 'what-happens-during-hood-cleaning', date: '2025-03-01' },
  { slug: 'health-inspection-checklist-san-diego', date: '2025-03-01' },
  { slug: 'grease-trap-vs-hood-cleaning', date: '2025-02-01' },
  { slug: 'commercial-kitchen-fire-suppression', date: '2025-04-01' },
  { slug: 'choosing-hood-cleaning-company-san-diego', date: '2025-04-01' },
  { slug: 'restaurant-compliance-san-diego-guide', date: '2025-05-01' },
  { slug: 'hood-cleaning-frequency-cooking-type', date: '2025-05-01' },
  { slug: 'commercial-kitchen-hood-cleaning-san-diego', date: '2026-05-29' },
  { slug: 'restaurant-hood-cleaning-san-diego', date: '2026-06-25' },
  { slug: 'emergency-hood-cleaning-san-diego', date: '2026-07-01' },
  { slug: 'brewery-hood-cleaning-san-diego', date: '2026-07-10' },
  { slug: 'after-hours-hood-cleaning-san-diego', date: '2026-07-23' },
  { slug: 'school-hospital-hood-cleaning-san-diego', date: '2026-07-30' },
  { slug: 'hotel-hood-cleaning-san-diego', date: '2026-08-06' },
  { slug: 'stadium-sports-venue-hood-cleaning-san-diego', date: '2026-08-20' },
  { slug: 'food-truck-hood-cleaning-san-diego', date: '2026-08-27' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.corehoodcleaning.com'

  const locationPages = LOCATIONS.map((slug) => ({
    url: `${base}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = BLOG_POSTS.map(({ slug, date }) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/services/hood-cleaning`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/services/filter-exchange`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/services/nfpa-inspection`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  return [
    ...staticPages,
    ...blogPages,
    ...locationPages,
  ]
}
