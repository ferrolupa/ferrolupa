import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ferrolupa.com.ar',
      lastModified: new Date(),
    },
    {
      url: 'https://ferrolupa.com.ar/historias',
      lastModified: new Date(),
    },
    {
      url: 'https://ferrolupa.com.ar/descargas',
      lastModified: new Date(),
    },
  ]
}