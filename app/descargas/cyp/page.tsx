import ClientDescargas from "../ClientDescargas";

export const metadata = {
  title: "Cálculo y Proyectos (CYP) | Ferrolupa",
  description:
    "Especificaciones, rendimientos y análisis de precios unitarios para proyectos ferroviarios.",
};

export default function Page() {
  return <ClientDescargas categoria="cyp" />;
}