import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://consorciocontempladobrasil.com.br';

  return ['', '/imoveis', '/sobre', '/contato', '/login', '/painel-anunciante'].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
    lastModified: new Date()
  }));
}
