import HistoriasListado from "@/components/HistoriasListado";
import historias from "@/data/historias/historias.json";

export default function HistoriasPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* ENCABEZADO */}
        <header className="mb-6">
          <div className="flex justify-between items-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
              Ferrolupa · Historias
            </p>
            <a
              href="/"
              className="text-ferroverde text-sm font-medium hover:text-ferroverde/80 transition"
            >
              ← Volver al inicio
            </a>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-ferroverde mt-1">
            Historias del Riel
          </h1>

          <p className="text-sm text-gray-700 mt-2">
            Relatos breves del universo ferroviario argentino.
            Cada historia revive un momento, un paisaje o un recuerdo del tren.
          </p>
        </header>

        {/* LISTADO DE HISTORIAS */}
        <HistoriasListado historias={historias} />
      </div>
    </main>
  );
}