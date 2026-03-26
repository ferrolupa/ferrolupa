export type CategoriaDescarga = "tecnica" | "planos" | "cyp";

export type RecursoDescarga = {
  id: string;
  titulo: string;
  slug: string;
  descripcion: string;
  url: string;
  video?: string;
  categoria: CategoriaDescarga;
};

export const descargas: RecursoDescarga[] = [
  {
    "categoria": "tecnica",
    "id": "1",
    "titulo": "Normas de infraestructura: NTVO",
    "slug": "normas_ntvo",
    "descripcion": "Normas Técnicas de Vía y Obras",
    "url": "https://drive.google.com/uc?export=download&id=1hhT5QUSRYhjm99YW8KesOO1jZVTkorF2",
    "video": "dfY0n-BPE54"
  },
  {
    "categoria": "tecnica",
    "id": "2",
    "titulo": "Normas de infraestructura: GVO",
    "slug": "normas_gvo",
    "descripcion": "Gerencia de Vía y Obras",
    "url": "https://drive.google.com/uc?export=download&id=1eEvCSKR3jFICKlMS88cb_57ArBU_Ogbo",
    "video": "dfY0n-BPE54"
  },
  {
    "categoria": "tecnica",
    "id": "3",
    "titulo": "Normas de Seguridad: Tolerancias de Seguridad y Mantenimiento de Vía",
    "slug": "normas_mantenimiento_de_via",
    "descripcion": "Norma técnica de Tolerancias de Seguridad y Mantenimiento de Vía",
    "url": "https://drive.google.com/uc?export=download&id=1IIK8h6gTu4E4ZJyirSby-rthjgvWPu1v",
    "video": "dfY0n-BPE54"
  },
  {
    "categoria": "tecnica",
    "id": "4",
    "titulo": "Normas de Seguridad: Resolución SETOP 7/81",
    "slug": "normas_setop",
    "descripcion": "Norma para los cruces entre caminos y vías férreas",
    "url": "https://drive.google.com/uc?export=download&id=1_f6OnPd-9K13xz1D0h6cOYPzQ8790WnB",
    "video": "dfY0n-BPE54"
  },
  {
    "categoria": "tecnica",
    "id": "5",
    "titulo": "Normas de Interferencias: Conducciones Eléctricas",
    "slug": "normas_interferencias_electricas",
    "descripcion": "Normas para las conducciones eléctricas que cruzan o corren paralelas al ferrocarril",
    "url": "https://drive.google.com/uc?export=download&id=1clbs3RyIYMj11iiE24zhi7Tl96PYNE5M",
    "video": "dfY0n-BPE54"
  },
  {
    "categoria": "planos",
    "id": "1000",
    "titulo": "Planos GVO",
    "slug": "planos_gvo",
    "descripcion": "Planos GVO: Completo",
    "url": "https://drive.google.com/uc?export=download&id=1pJ3FDhheN2Fp38s1-0X8HYwlfzqbQaU1",
    "video": "dfY0n-BPE54"
  },
  {
    "categoria": "planos",
    "id": "1001",
    "titulo": "Planos GST/GCTF",
    "slug": "planos_gst_gctf",
    "descripcion": "Planos GST/GCTF: Completo",
    "url": "https://drive.google.com/uc?export=download&id=14oIGEC2agZVLwMq5q0m2C2834q6DnOVP",
    "video": "dfY0n-BPE54"
  },
  {
    "categoria": "cyp",
    "id": "2001",
    "titulo": "Proximamente",
    "slug": "proximamente",
    "descripcion": "Proximamente se agregará nueva información",
    "url": "https://drive.google.com/uc?export=download&id=",
    "video": "dfY0n-BPE54"
  }
];
