import { historias } from "@/data/historiasIndex";
import HistoriaLayout from "@/components/HistoriaLayout";

export default function Page() {
  const data = historias.find((h) => h.id === "002");

  if (!data) return <p>Error: historia no encontrada.</p>;

  return (
    <HistoriaLayout
      titulo={data.titulo}
      fecha={data.fecha}
      videoId={data.videoId}
    >
      <>
        <p>Hubo una época en la que mirar el reloj no era suficiente. En muchos pueblos del interior, la hora no estaba en las casas, ni en la plaza, ni en la iglesia. La hora estaba en la estación.</p>
        <p>Antes de la radio, del teléfono y de los relojes confiables, el ferrocarril era la referencia. Cada tren circulaba con horarios estrictos, sincronizados para garantizar la seguridad del sistema. Por eso, cuando el tren llegaba, traía algo más que pasajeros y carga: traía certeza.</p>
        <p>Al paso de la formación, el pueblo entero se ajustaba. Los comercios abrían, la escuela marcaba el inicio de la jornada y los relojes se ponían en hora mirando el andén.</p>
        <p>El tren no llegaba tarde ni temprano. El tren era la hora.</p>
        <p>Esta historia recorre el tiempo en que el ferrocarril fue una autoridad cotidiana, capaz de ordenar la vida de pueblos enteros.</p>
        <p>Te invitamos a ver el video y conocer cómo el tiempo también viajó sobre rieles.</p>
      </>
    </HistoriaLayout>
  );
}
