import { historias } from "@/data/historiasIndex";
import HistoriaLayout from "@/components/HistoriaLayout";

export default function Page() {
  const data = historias.find((h) => h.id === "001");

  if (!data) return <p>Error: historia no encontrada.</p>;

  return (
    <HistoriaLayout
      titulo={data.titulo}
      fecha={data.fecha}
      videoId={data.videoId}
    >
      <>
        <p>La noche del 27 de noviembre de 1965 quedó grabada en la historia de Bahía Blanca. Una cadena de fallas técnicas, decisiones humanas y ausencia de sistemas de seguridad derivaron en una de las tragedias ferroviarias más dolorosas de la ciudad.</p>
        <p>Esta historia no habla solo de un accidente, sino de cómo la infraestructura, la tecnología disponible (o su ausencia) pueden cambiar destinos.</p>
        <p>En el siguiente video reconstruimos los hechos y el contexto que llevaron a aquel fatídico desenlace.</p>
      </>
    </HistoriaLayout>
  );
}
