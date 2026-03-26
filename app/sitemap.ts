import { MetadataRoute } from 'next'
import { descargas } from '@/data/descarga/descargas'
import { historias } from '@/data/historias'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ferrolupa.com.ar'

  // URLs principales
  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/historias`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/descargas`,
      lastModified: new Date(),
    },
  ]

  // Agregamos URLs dinámicas de descargas
  const descargaUrls = descargas.map(d => ({
    url: `${baseUrl}/descargas/${d.slug}`,
    lastModified: new Date(),
  }))

  // Agregamos URLs dinámicas de historias
  const historiaUrls = historias.map(h => ({
    url: `${baseUrl}/historias/${h.slug}`,
    lastModified: new Date(),
  }))

  return [...urls, ...descargaUrls, ...historiaUrls]
}