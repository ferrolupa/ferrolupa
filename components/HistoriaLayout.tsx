"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import Comments from "@/components/Comments";


interface HistoriaLayoutProps {
  titulo: string;
  fecha: string;
  videoId: string;
  children: ReactNode;
}

export default function HistoriaLayout({
  titulo,
  fecha,
  videoId,
  children,
}: HistoriaLayoutProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-900">
      <div className="max-w-4xl mx-auto">

        {/* ENCABEZADO */}
        <header className="mb-6">
          <div className="flex justify-between items-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
              Ferrolupa · Historias
            </p>

            <Link
              href="/historias"
              className="text-ferroverde text-sm font-medium hover:text-ferroverde/80 transition"
            >
              ← Volver al listado
            </Link>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-ferroverde mt-1">
            {titulo}
          </h1>

          <p className="text-sm text-gray-600">{fecha}</p>
        </header>

        {/* TEXTO DE LA HISTORIA */}
        <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-8">
          {children}
        </article>

        {/* PUBLICIDAD — ANTES DEL VIDEO */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
            Publicidad
          </p>
          <div
            className="
              h-24 w-full rounded-lg border border-dashed border-gray-300 bg-gray-50
              flex items-center justify-center text-xs text-gray-500 text-center px-3
            "
          >
            Bloque de anuncio o patrocinio
          </div>
        </div>

        {/* VIDEO */}
        <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden border-4 border-ferroverde shadow-md">
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}

          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Video de la historia"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* COMENTARIOS — GISCUS REAL */}
        <div className="mt-10">
      

        <Comments pageId={titulo.toLowerCase().replaceAll(" ", "-")} />

        </div>

      </div>
    </main>
  );
}
