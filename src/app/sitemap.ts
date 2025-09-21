
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
  ]

  // Dynamic Service pages from constants.ts
  const serviceRoutes: MetadataRoute.Sitemap = (services ?? []).map(
    (s: { slug: string; path?: string }) => ({
      url: `${base}${s.path ?? `/services/${s.slug}`}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  );

  // Statically-defined service pages that are NOT in constants.ts
  const staticServiceRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/services/4-point-inspection`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/home-inspection`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/condo-townhouse`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Dynamic City pages from constants.ts
  const cityRoutes: MetadataRoute.Sitemap = (serviceAreas ?? []).map((city: string) => ({
    url: `${base}/service-areas/${slugify(city)}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Statically-defined city pages that are NOT in constants.ts
  const staticCityRoutes: MetadataRoute.Sitemap = [
      { url: `${base}/service-areas/fort-myers`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
      { url: `${base}/service-areas/cape-coral`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
      { url: `${base}/service-areas/punta-gorda`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
      { url: `${base}/service-areas/lake-placid`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
      { url: `${base}/service-areas/babcock-ranch`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
      { url: `${base}/service-areas/ave-maria`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
      { url: `${base}/service-areas/montura-ranch-estates`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  // De-dupe just in case
  const seen = new Set<string>()
  return [...staticPages, ...serviceRoutes, ...staticServiceRoutes, ...cityRoutes, ...staticCityRoutes].filter(i =>
    seen.has(i.url) ? false : (seen.add(i.url), true)
  )
}
