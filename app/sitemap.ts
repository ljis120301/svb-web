import type { MetadataRoute } from 'next';
import { getAllSupportArticles } from '@/lib/supportArticles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sunvalleybroadband.com';
  const now = new Date();
  const routes = [
    '',
    '/about',
    '/services',
    '/support',
    '/support/contact',
    '/contact',
    '/fiber',
    '/wireless',
    '/cable',
  ];

  const staticEntries = routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  const articleEntries = getAllSupportArticles().map((a) => ({
    url: `${baseUrl}/support/${a.slug}`,
    lastModified: a.updatedAt ? new Date(a.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}


