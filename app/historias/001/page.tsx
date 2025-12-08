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
        <p>Primer párrafo de la historia…</p>
        <p>Segundo párrafo, etc…</p>
      </>
    </HistoriaLayout>
  );
}
