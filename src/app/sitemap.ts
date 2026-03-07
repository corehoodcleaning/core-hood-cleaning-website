import { MetadataRoute } from 'next'

const LOCATIONS = [
  'la-jolla','pacific-beach','mission-valley','downtown-san-diego','chula-vista',
  'oceanside','carlsbad','escondido','el-cajon','vista','san-marcos','national-city',
  'la-mesa','coronado','encinitas','del-mar','miramar','rancho-bernardo','poway','santee'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.corehoodcleaning.com'
  const locationPages = LOCATIONS.map((slug) => ({
    url: `${base}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    ...locationPages,
  ]
}
