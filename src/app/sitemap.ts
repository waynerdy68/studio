// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { services, serviceAreas } from '@/lib/constants'

const base = 'https://mayneinspectors.com'
const now = new Date()
const slugify = (t: string) => t.toLowerCase().replace(/\s+/g, '-')

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages you said are live
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/faq`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cost-estimator`,lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/checklist`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Uncomment ONLY if these routes actually exist:
    // { url: `${base}/about`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    // { url: `${base}/contact`,     lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  // Service pages — assumes /services/{slug}
  // If you use top-level like /wind-mitigation, add a "path" field to your services and this code will use it.
  const serviceRoutes: MetadataRoute.Sitemap = (services ?? []).map(
    (s: { slug: string; path?: string }) => ({
      url: `${base}${s.path ?? `/services/${s.slug}`}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  )

  // City pages — assumes /service-areas/{city-slug}
  const cityRoutes: MetadataRoute.Sitemap = (serviceAreas ?? []).map((city: string) => ({
    url: `${base}/service-areas/${slugify(city)}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Add the new static Fort Myers page
  const staticCityRoutes: MetadataRoute.Sitemap = [
      { url: `${base}/service-areas/fort-myers`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 }
  ];


  // De-dupe just in case
  const seen = new Set<string>()
  return [...staticPages, ...serviceRoutes, ...cityRoutes, ...staticCityRoutes].filter(i =>
    seen.has(i.url) ? false : (seen.add(i.url), true)
  )
}
