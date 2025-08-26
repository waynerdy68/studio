// src/app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api'] }],
    sitemap: 'https://mayneinspectors.com/sitemap.xml',
    host: 'https://mayneinspectors.com',
  }
}
