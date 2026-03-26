import ClientDescargas from "../ClientDescargas";

export const metadata = {
  title: "Planos Ferroviarios | Ferrolupa",
  description:
    "Planos técnicos ferroviarios listos para descargar y utilizar en proyectos.",
};

export default function Page() {
  return <ClientDescargas categoria="planos" />;
}