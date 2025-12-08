"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { historias } from "@/data/historiasIndex";

export default function HistoriasPage() {
  const [abierta, setAbierta] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtradas = useMemo(() => {
    if (!query.trim()) return historias;
    const q = query.toLowerCase();
    return historias.filter((h) =>
      h.titulo.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* ENCABEZADO */}
        <header className="mb-6">
          <div className="flex justify-between items-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
              Ferrolupa · Historias
            </p>

            <Link
              href="/"
              className="text-ferroverde text-sm font-medium hover:text-ferroverde/80 transition"
            >
              ← Volver al inicio
            </Link>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-ferroverde mt-1">
            Historias del Riel
          </h1>

          <p className="text-sm text-gray-700 mt-2">
            Relatos breves del universo ferroviario argentino.
            Cada historia revive un momento, un paisaje o un recuerdo del tren.
          </p>
        </header>

        {/* PUBLICIDAD SUPERIOR */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
            Publicidad
          </p>
          <div className="
            h-24 w-full rounded-lg border border-dashed border-gray-300 bg-gray-50
            flex items-center justify-center text-xs text-gray-500 text-center px-3
          ">
            Bloque de anuncio o patrocinio
          </div>
        </div>

        {/* BLOQUE PRINCIPAL */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">
          {/* BUSCADOR */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
            <div className="text-xs text-gray-500">
              {filtradas.length} historia
              {filtradas.length === 1 ? "" : "s"} encontrada/s
              {filtradas.length === historias.length
                ? ""
                : ` (de ${historias.length} totales)`}
            </div>

            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar historia…"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-ferroverde focus:border-ferroverde"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* ACORDEÓN */}
          <ul className="space-y-6">
            {filtradas.map((h, i) => {
              const activa = abierta === h.slug;

              return (
                <li key={i} className="pb-4 border-b border-gray-200">
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
                  <div
                    className={`
                      transition-all overflow-hidden 
                      ${activa ? "max-h-[1000px] mt-3" : "max-h-0"}
                    `}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 bg-gray-50 rounded-lg p-3">
                      {/* Texto */}
                      <div className="md:col-span-2 space-y-2">
                        <p className="text-sm text-gray-600">{h.bajada}</p>

                        <div
                          className="prose prose-sm max-w-none prose-headings:text-ferroverde"
                          dangerouslySetInnerHTML={{ __html: h.contenidoListado }}
                        />

                        <Link
                          href={h.slug}
                          className="text-ferroverde text-xs hover:underline mt-1"
                        >
                          Leer más →
                        </Link>
                      </div>

                      {/* Imagen */}
                      <div>
                        <img
                          src={h.imagenListado}
                          className="w-full h-[180px] object-cover rounded-lg shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* PUBLICIDAD INFERIOR */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mt-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
            Publicidad
          </p>
          <div className="
            h-24 w-full rounded-lg border border-dashed border-gray-300 bg-gray-50
            flex items-center justify-center text-xs text-gray-500 text-center px-3
          ">
            Segundo bloque de anuncio o patrocinio
          </div>
        </div>
      </div>
    </main>
  );
}
