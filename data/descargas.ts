// data/descargas.ts

export type CategoriaDescarga = "tecnica" | "planos" | "cyp";

export type RecursoDescarga = {
  id: string;
  titulo: string;
  descripcion: string;
  url: string;     // link directo (Drive, etc.)
  video?: string;  // ID de YouTube (opcional, para /descargar)
  categoria: CategoriaDescarga;
};

export const descargas: RecursoDescarga[] = [
  {
    id: "archivo-prueba-1",
    titulo: "Archivo de prueba 1",
    descripcion: "Primer archivo de ejemplo para probar el sistema.",
    url: "https://drive.google.com/uc?export=download&id=1b-DyAHD0E95zfICryJ7eQ7cM9MZIpqdQ",
    video: "dfY0n-BPE54",
    categoria: "tecnica",
  },
  {
    id: "archivo-prueba-2",
    titulo: "Archivo de prueba 2",
    descripcion: "Segundo archivo de ejemplo para verificar la descarga directa.",
    url: "https://drive.google.com/uc?export=download&id=ID_DEL_SEGUNDO_ARCHIVO",
    video: "oHg5SJYRHA0",
    categoria: "tecnica",
  },
  // después vas agregando más entradas con la categoría que toque
];
