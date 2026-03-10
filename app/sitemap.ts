import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ferrolupa.com',
      lastModified: new Date(),
    },
    {
      url: 'https://ferrolupa.com/historias',
      lastModified: new Date(),
    },
    {
      url: 'https://ferrolupa.com/descargas',
      lastModified: new Date(),
    },
  ]
}