import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sunvalleybroadband.com';
  const now = new Date();
  const routes = [
    '',
    '/about',
    '/services',
    '/support',
    '/contact',
    '/fiber',
    '/wireless',
    '/cable',
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}


