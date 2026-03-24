import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data/historias/historias.json');

export function getHistorias() {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  //console.log('DATA:', data); // 👈 ACÁ

  return data;
}

export function getHistoriaBySlug(slug) {
  const historias = getHistorias();
  return historias.find((h) => h.slug === slug);
}