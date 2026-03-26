import { descargas, type RecursoDescarga } from "@/data/descarga/descargas";
import { notFound } from "next/navigation";
import ClientDownload from "./ClientDownload";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  const slug = params.slug;

  const recurso: RecursoDescarga | undefined = descargas.find(
    (r) => r.slug === slug
  );

  if (!recurso) {
    return {
      title: "Descarga no encontrada | Ferrolupa",
    };
  }

  return {
    title: `${recurso.titulo} | Ferrolupa`,
    description: recurso.descripcion,
  };
}

export default function Page({ params }: Props) {
  const slug = params.slug;

  const recurso: RecursoDescarga | undefined = descargas.find(
    (r) => r.slug === slug 
  );

  if (!recurso) return notFound();

  return <ClientDownload recurso={recurso} />;
}