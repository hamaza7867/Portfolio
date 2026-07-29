import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alihamza-portfolio.pages.dev';
  
  const paths = ['', '/about', '/services', '/projects', '/skills', '/experience', '/contact'];
  
  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));
}
