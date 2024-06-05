import type { MetadataRoute } from 'next';

import { DOMAIN } from '@/lib/constants/site';

export const baseUrl = DOMAIN;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
