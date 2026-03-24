import HistoriaLayout from '@/components/HistoriaLayout';
import { getHistoriaBySlug } from '@/lib/historias';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function HistoriaPage({ params }: Props) {
  // Desempaquetamos el slug
  const { slug } = await params;

  // Buscamos la historia por su slug
  const historia = getHistoriaBySlug(slug);

  // Si no hay historia, retornamos un mensaje
  if (!historia) {
    return <div>No encontrada</div>;
  }

  // Dividimos el texto de la historia en párrafos
  const parrafos = historia.historiaTexto?.split('\n') || [];

  return (
    <HistoriaLayout 
      titulo={historia.titulo} 
      fecha={historia.fecha} 
      videoId={historia.videoId}
    >
      {parrafos.map((p: string, i: number) => (
        <p key={i}>{p}</p>
      ))}
    </HistoriaLayout>
  );
}