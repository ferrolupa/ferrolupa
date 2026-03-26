import ClientDescargas from "../ClientDescargas";

export const metadata = {
  title: "Normativa Técnica | Ferrolupa",
  description:
    "Normas, reglamentos y documentación técnica ferroviaria para consulta y descarga.",
};

export default function Page() {
  return <ClientDescargas categoria="tecnica" />;
}