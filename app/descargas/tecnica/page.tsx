"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { descargas } from "@/data/descargas";

export default function DescargasTecnicaPage() {
  const [query, setQuery] = useState("");

  // Filtrar por categoría "tecnica"
  const recursosTecnicos = useMemo(
    () => descargas.filter((r) => r.categoria === "tecnica"),
    []
  );

  // Filtro por texto
  const recursosFiltrados = useMemo(() => {
    if (!query.trim()) return recursosTecnicos;
    const q = query.toLowerCase();
    return recursosTecnicos.filter(
      (r) =>
        r.titulo.toLowerCase().includes(q) ||
        r.descripcion.toLowerCase().includes(q)
    );
  }, [recursosTecnicos, query]);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-900">
      <div className="max-w-5xl mx-auto">

        {/* Header con botón alineado */}
        <header className="mb-6">

          {/* Fila superior: Ferrolupa · Descargas + Volver al inicio */}
          <div className="flex justify-between items-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
              Ferrolupa · Descargas
            </p>

            <a
              href="/"
              className="text-ferroverde text-sm font-medium hover:text-ferroverde/80 transition"
            >
              ← Volver al inicio
            </a>
          </div>

          {/* Título */}
          <h1 className="text-2xl md:text-3xl font-semibold text-ferroverde mt-1">
            Documentación técnica
          </h1>

          <p className="text-sm text-gray-700 mt-2">
            Informes, memorias técnicas, criterios de diseño y otros documentos
            de soporte para tus proyectos ferroviarios.
          </p>
        </header>

        {/* PUBLICIDAD SUPERIOR */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
            Publicidad
          </p>
          <div className="h-24 w-full rounded-lg border border-dashed border-gray-300 bg-gray-50 
            flex items-center justify-center text-xs text-gray-500 text-center px-3">
            Bloque de anuncio o patrocinio
          </div>
        </div>

        {/* Bloque principal */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">

          {/* Barra superior: datos de conteo + buscador */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
            <div className="text-xs text-gray-500">
              {recursosFiltrados.length} documento
              {recursosFiltrados.length === 1 ? "" : "s"} encontrado
              {recursosFiltrados.length === recursosTecnicos.length
                ? ""
                : ` (de ${recursosTecnicos.length} totales)`}
            </div>

            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar por título o descripción…"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-ferroverde focus:border-ferroverde"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* TABLA */}
          {recursosFiltrados.length === 0 ? (
            <p className="text-sm text-gray-500">
              No se encontraron documentos que coincidan con tu búsqueda.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide w-[45%]">
                      Documento
                    </th>
                    <th className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide w-[40%]">
                      Descripción
                    </th>
                    <th className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide w-[15%] text-right">
                      Acción
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {recursosFiltrados.map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 1 ? "bg-gray-50/60" : ""}
                    >
                      <td className="px-3 py-2 align-top">
                        <p className="text-xs font-semibold text-gray-900">
                          {item.titulo}
                        </p>
                      </td>

                      <td className="px-3 py-2 align-top">
                        <p className="text-xs text-gray-600">
                          {item.descripcion}
                        </p>
                      </td>

                      <td className="px-3 py-2 align-top text-right">
                        <Link
                          href={`/descargar?id=${encodeURIComponent(item.id)}`}
                          className="inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-ferroverde text-white text-[11px] font-semibold hover:bg-ferroverde/90 transition"
                        >
                          Descargar
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* PUBLICIDAD INFERIOR */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mt-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
            Publicidad
          </p>
          <div className="h-24 w-full rounded-lg border border-dashed border-gray-300 bg-gray-50 
            flex items-center justify-center text-xs text-gray-500 text-center px-3">
            Segundo bloque de anuncio o patrocinio
          </div>
        </div>

      </div>
    </main>
  );
}
