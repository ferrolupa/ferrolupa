"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { descargas } from "../../data/descargas";

export default function DownloadPage() {
  const [secondsLeft, setSecondsLeft] = useState(5);

  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? undefined;

  const recurso = descargas.find((r) => r.id === id);

  const hasFile = !!recurso;
  const downloadUrl = recurso?.url;
  const label = recurso?.titulo ?? "Sin archivo seleccionado";

  const defaultVideoId = "dfY0n-BPE54";
  const videoId = recurso?.video ?? defaultVideoId;

  useEffect(() => {
    if (!hasFile || !downloadUrl) return;

    if (secondsLeft <= 0) {
      window.location.href = downloadUrl;
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, hasFile, downloadUrl]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full grid gap-6 lg:grid-cols-[2fr,1fr] items-start">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          <header className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-1">
              Ferrolupa · Descargas
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-ferroverde">
              {hasFile ? "Preparando tu descarga" : "Descarga no encontrada"}
            </h1>
          </header>

          <div className="mb-4">
            {hasFile ? (
              <>
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
              </>
            ) : (
              <>
                <p className="text-sm text-gray-700">
                  No se encontró ningún recurso con ese identificador.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Volvé al listado de descargas y probá de nuevo.
                </p>
              </>
            )}
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
                if (!downloadUrl) return;
                window.location.href = downloadUrl;
              }}
              disabled={!hasFile}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-ferroverde text-white text-sm font-semibold hover:bg-ferroverde/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {hasFile ? "Descargar ahora" : "Descargar (inactivo)"}
            </button>

            <Link
              href={`/descargas/${recurso?.categoria ?? ""}`}
              className="text-xs text-gray-500 hover:text-ferroverde underline-offset-4 hover:underline"
            >
              Volver al listado de descargas
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
              Publicidad
            </p>
            <div className="h-32 w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-xs text-gray-500 text-center px-3">
              Espacio reservado para anuncios o sponsoreo ferroviario.
              <br />
              (Acá va tu script de AdSense / sponsor).
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
              Publicidad
            </p>
            <div className="h-32 w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-xs text-gray-500 text-center px-3">
              Espacio reservado para anuncios o sponsoreo ferroviario.
              <br />
              (Acá va tu script de AdSense / sponsor).
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
              Ferrolupa
            </p>
            <p className="text-xs text-gray-700">
              Apoyá este proyecto para que podamos seguir publicando mapas, capas y recursos ferroviarios de forma gratuita.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
