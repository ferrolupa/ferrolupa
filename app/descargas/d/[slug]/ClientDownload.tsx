"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RecursoDescarga } from "@/data/descarga/descargas";

export default function ClientDownload({
  recurso,
}: {
  recurso: RecursoDescarga;
}) {
  const [secondsLeft, setSecondsLeft] = useState(5);

  const hasFile = !!recurso;
  const downloadUrl = recurso.url;
  const label = recurso.titulo;

  const defaultVideoId = "dfY0n-BPE54";
  const videoId = recurso.video ?? defaultVideoId;

  useEffect(() => {
    if (!downloadUrl) return;

    if (secondsLeft <= 0) {
      window.location.href = downloadUrl;
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, downloadUrl]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full grid gap-6 lg:grid-cols-[2fr,1fr] items-start">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          <header className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-1">
              Ferrolupa · Descargas
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-ferroverde">
              Preparando tu descarga
            </h1>
          </header>

          <div className="mb-4">
            <p className="text-sm text-gray-700">
              Tu archivo se descargará automáticamente en{" "}
              <span className="font-semibold text-ferroverde">
                {secondsLeft} {secondsLeft === 1 ? "segundo" : "segundos"}
              </span>
              .
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Si no querés esperar, podés iniciar la descarga manualmente.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-ferroverde/20 mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-ferroverde animate-pulse" />
            <span className="text-xs font-mono text-gray-800 truncate max-w-[260px] md:max-w-sm">
              {label}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={() => {
                window.location.href = downloadUrl;
              }}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-ferroverde text-white text-sm font-semibold hover:bg-ferroverde/90 transition"
            >
              Descargar ahora
            </button>

            <Link
              href={`/descargas/${recurso.categoria}`}
              className="text-xs text-gray-500 hover:text-ferroverde underline-offset-4 hover:underline"
            >
              Volver al listado
            </Link>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-800">
              Mientras tanto, mirá más de Ferrolupa:
            </p>
            <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-black">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Ferrolupa · Video"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}