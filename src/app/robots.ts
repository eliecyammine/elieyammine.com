import { DOMAIN } from '@/lib/constants/site';

/// ---------- || ROBOTS || ---------- ///

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],

    host: DOMAIN,

    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
