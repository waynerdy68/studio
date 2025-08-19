import { MetadataRoute } from 'next';
import { services, serviceAreas } from '@/lib/constants';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mayneinspectors.com';

  // Static pages
  const staticRoutes = [
    '',
    '/faq',
    '/cost-estimator',
    '/checklist',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic service pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic service area pages
  const serviceAreaRoutes = serviceAreas.map((city) => ({
    url: `${baseUrl}/service-areas/${slugify(city)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...serviceAreaRoutes];
}
