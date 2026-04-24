import type { MetadataRoute } from 'next';

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'http://localhost:3000';
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const locales = ['en', 'ka', 'ru'];

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about/facility', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about/team', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about/coaches', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/classes', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/adults-bjj', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kids-program', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/masterclass', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/schedule', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/gallery', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/contacts', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${page.path}`;

      const alternates: { [key: string]: string } = {};
      for (const altLocale of locales) {
        alternates[altLocale] = `${baseUrl}/${altLocale}${page.path}`;
      }
      alternates['x-default'] = `${baseUrl}/ka${page.path}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return sitemapEntries;
}
