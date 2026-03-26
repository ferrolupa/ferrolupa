const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');

const inputCsv = path.join(__dirname, '../data/descarga/descargas.csv');
const outputTs = path.join(__dirname, '../data/descarga/descargas.ts');

csv()
  .fromFile(inputCsv)
  .then((jsonArray) => {
    const tsContent = `export type CategoriaDescarga = "tecnica" | "planos" | "cyp";

export type RecursoDescarga = {
  id: string;
  titulo: string;
  slug: string;
  descripcion: string;
  url: string;
  video?: string;
  categoria: CategoriaDescarga;
};

export const descargas: RecursoDescarga[] = ${JSON.stringify(jsonArray, null, 2)};
`;

    fs.writeFileSync(outputTs, tsContent);
    console.log('✅ Archivo descargas.ts generado correctamente en data/descarga');
  });