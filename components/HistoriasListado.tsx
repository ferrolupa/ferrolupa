"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Historia {
  id: string;
  slug: string;
  titulo: string;
  bajada: string;
  fecha: string;
  miniaturaListado: string;
  imagenListado: string;
  contenidoListado: string;
}

interface Props {
  historias: Historia[];
}

export default function HistoriasListado({ historias }: Props) {
  const [abierta, setAbierta] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtradas = useMemo(() => {
    if (!query.trim()) return historias;
    const q = query.toLowerCase();
    return historias.filter(h => h.titulo.toLowerCase().includes(q));
  }, [query, historias]);

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">
      {/* BUSCADOR */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
        <div className="text-xs text-gray-500">
          {filtradas.length} historia{filtradas.length === 1 ? "" : "s"} encontrada/s
        </div>

        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Buscar historia…"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-ferroverde focus:border-ferroverde"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ACORDEÓN */}
      <ul className="space-y-6">
        {filtradas.map(h => {
          const activa = abierta === h.slug;

          return (
            <li key={h.slug} className="pb-4 border-b border-gray-200">
              {/* CABECERA */}
              <div
                onClick={() => setAbierta(activa ? null : h.slug)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <img
                  src={h.miniaturaListado}
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div>
                  <p className="font-medium text-sm text-gray-900 group-hover:text-ferroverde">
                    {h.titulo}
                  </p>
                  <p className="text-xs text-gray-500">{h.fecha}</p>
                </div>
              </div>

              {/* EXPANDIDO */}
              <div className={`transition-all overflow-hidden ${activa ? "max-h-[1000px] mt-3" : "max-h-0"}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 bg-gray-50 rounded-lg p-3">
                  {/* Texto */}
                  <div className="md:col-span-2 space-y-2">
                    <p className="text-sm text-gray-600">{h.bajada}</p>
                    <div
                      className="prose prose-sm max-w-none prose-headings:text-ferroverde"
                      dangerouslySetInnerHTML={{ __html: h.contenidoListado }}
                    />
                    <Link
                      href={`/historias/${h.slug}`}
                      className="text-ferroverde text-xs hover:underline mt-1 block"
                    >
                      Leer más →
                    </Link>
                  </div>

                  {/* Imagen */}
                  <div>
  <Link href={`/historias/${h.slug}`}>
    <img
      src={h.imagenListado}
      className="w-full h-[180px] object-cover rounded-lg shadow-sm cursor-pointer"
    />
  </Link>
</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}