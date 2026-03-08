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
    id: "01",
    titulo: "Normas de infraestructura: NTVO",
    descripcion: "Normas Técnicas de Vía y Obras",
    url: "https://drive.google.com/uc?export=download&id=1hhT5QUSRYhjm99YW8KesOO1jZVTkorF2",
    video: "dfY0n-BPE54",
    categoria: "tecnica",
  },
  {
    id: "02",
    titulo: "Normas de infraestructura: GVO",
    descripcion: "Gerencia de Vía y Obras",
    url: "https://drive.google.com/uc?export=download&id=1eEvCSKR3jFICKlMS88cb_57ArBU_Ogbo",
    video: "dfY0n-BPE54",
    categoria: "tecnica",
  },
    {
    id: "03",
    titulo: "Normas de Seguridad: Tolerancias de Seguridad y Mantenimiento de Vía",
    descripcion: "Norma técnica de Tolerancias de Seguridad y Mantenimiento de Vía",
    url: "https://drive.google.com/uc?export=download&id=1IIK8h6gTu4E4ZJyirSby-rthjgvWPu1v",
    video: "dfY0n-BPE54",
    categoria: "tecnica",
  },
    {
    id: "04",
    titulo: "Normas de Seguridad: Resolución SETOP 7/81",
    descripcion: "Norma para los cruces entre caminos y vías férreas",
    url: "https://drive.google.com/uc?export=download&id=1_f6OnPd-9K13xz1D0h6cOYPzQ8790WnB",
    video: "dfY0n-BPE54",
    categoria: "tecnica",
  },
    {
    id: "05",
    titulo: "Normas de Interferencias: Conducciones Eléctricas",
    descripcion: "Normas para las conducciones eléctricas que cruzan o corren paralelas al ferrocarril ",
    url: "https://drive.google.com/uc?export=download&id=1clbs3RyIYMj11iiE24zhi7Tl96PYNE5M",
    video: "dfY0n-BPE54",
    categoria: "tecnica",
  },
  // después vas agregando más entradas con la categoría que toque

   // ------------------------------- PLANOS -------------------------------------------------
    {
    id: "1000",
    titulo: "Planos GVO",
    descripcion: "Planos GVO: Completo ",
    url: "https://drive.google.com/uc?export=download&id=1pJ3FDhheN2Fp38s1-0X8HYwlfzqbQaU1",
    video: "dfY0n-BPE54",
    categoria: "planos",
  },

    {
    id: "1001",
    titulo: "Planos GST/GCTF",
    descripcion: "Planos GST/GCTF: Completo ",
    url: "https://drive.google.com/uc?export=download&id=14oIGEC2agZVLwMq5q0m2C2834q6DnOVP",
    video: "dfY0n-BPE54",
    categoria: "planos",
  },



  // ------------------------------- CYP -------------------------------------------------
   {
    id: "2001",
    titulo: "Proximamente",
    descripcion: "Proximamente se agregará nueva información",
    url: "https://drive.google.com/uc?export=download&id=",
    video: "dfY0n-BPE54",
    categoria: "cyp",
  },


];


