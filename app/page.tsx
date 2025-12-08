"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Newspaper } from "lucide-react";
import dynamic from "next/dynamic";

// IMPORTAMOS EL SISTEMA DE HISTORIAS
import { elegirHistoriasDelDia } from "@/utils/historias";

import ContactoForm from "@/components/ContactoForm";

// Mapa dinámico
const MapFerrolupa = dynamic(() => import("@/components/MapFerrolupa"), {
  ssr: false,
});

export default function HomePreview() {
  // Imagen de portada rotativa (5 imágenes en /public/imagenes-portada/)
  const day = new Date().getDate();
  const imageIndex = (day % 5) + 1;
  const imageUrl = `/imagenes-portada/${imageIndex}.webp`;

  // Historias dinámicas del día (2 tarjetas + la fija)
  const historiasDelDia = elegirHistoriasDelDia(2);

  // Archivos de descarga
  const archivos = [
    {
      title: "Documentación Técnica",
      href: "/descargas/tecnica",
      desc: "Normativas, manuales, planillas de trabajo y más.",
    },
    {
      title: "Planos Ferroviarios",
      href: "/descargas/planos",
      desc: "Documentación gráfica, planos tipo, planos históricos",
    },
    {
      title: "Cómputo y Presupuesto",
      href: "/descargas/cyp",
      desc: "Pliegos, rendimientos, planillas de presupuesto",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-gray-50 text-gray-900 pt-16">

      {/* Header */}
      <header className="fixed top-0 w-full bg-white z-[1000]">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-medium text-ferroverde tracking-wide uppercase">
              FERROLUPA
            </h1>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="text-ferroverde hover:text-ferroverde/80">INICIO</a>
            <a href="#mapa" className="text-ferroverde hover:text-ferroverde/80">MAPA</a>
            <a href="#historias" className="text-ferroverde hover:text-ferroverde/80">HISTORIAS DEL RIEL</a>
            <a href="#descargas" className="text-ferroverde hover:text-ferroverde/80">DESCARGAS</a>
            <a href="#contacto" className="text-ferroverde hover:text-ferroverde/80">CONTACTO</a>
          </nav>

<a
  href="https://www.youtube.com/@academialupa"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="text-ferroverde border-ferroverde">
    Cursos (próximamente)
  </Button>
</a>
        </div>
      </header>

      {/* Hero con imagen dinámica */}
      <section
        className="relative w-full h-[calc(100vh-4rem)] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-white">
            Explorá la red ferroviaria argentina
          </h2>
          <Button
            className="mt-8 bg-ferroverde hover:bg-ferroverde text-white text-lg"
            onClick={() =>
              document.getElementById("mapa")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explorar el mapa
          </Button>
        </div>
      </section>

      {/* Mapa Interactivo */}
      <section id="mapa" className="scroll-mt-5 w-full max-w-6xl py-16 px-4 text-center">
        <h3 className="text-3xl font-semibold text-ferroverde mb-6">MAPA INTERACTIVO</h3>
        <p className="text-gray-700 mb-6">
          Explorá la historia ferroviaria argentina desde nuestro mapa interactivo.
        </p>
        <div className="relative z-0 w-full h-[500px] rounded-2xl overflow-hidden">
          <MapFerrolupa />
        </div>
      </section>

 {/* ⭐ NUEVO — HISTORIAS DINÁMICAS */}
      <section id="historias" className="scroll-mt-5 w-full max-w-6xl py-16 px-4 bg-white">
        <h3 className="text-3xl font-semibold text-ferroverde mb-6 text-center">
          HISTORIAS DEL RIEL
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

{/* Historias dinámicas */}
{historiasDelDia.map((h) => (
  <Card
    key={h.id}
    className="rounded-md shadow-sm border border-gray-200 transition hover:shadow-md"
  >
    <CardContent className="p-0">

<div className="h-48 overflow-hidden rounded-t-md bg-gray-100 flex items-center justify-center relative">
  <img
    src={h.miniaturaListado}
    className="w-full h-full object-cover"
    onError={(e) => {
      e.currentTarget.style.display = "none";

      const parent = e.currentTarget.parentElement;
      if (parent && !parent.querySelector(".fallback-icon")) {
        const fallback = document.createElement("div");
        fallback.className =
          "fallback-icon w-full h-full flex items-center justify-center bg-gray-100 rounded-t-md";
        fallback.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"
            class="text-ferroverde">
            <path d="M2 3h20v18H2z"/>
            <path d="M7 8h10M7 12h10M7 16h4"/>
          </svg>
        `;
        parent.appendChild(fallback);
      }
    }}
  />
</div>


      {/* Texto */}
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-2 text-ferroverde">
          {h.titulo}
        </h4>

        <p className="text-sm text-gray-600 mb-4">{h.bajada}</p>

        <Button
          className="bg-ferroverde hover:bg-ferroverde/90 text-white w-full"
          asChild
        >
          <a href={h.slug}>Leer historia →</a>
        </Button>
      </div>

    </CardContent>
  </Card>
))}



          {/* Tarjeta fija */}
          <Card className="rounded-md shadow-sm border border-gray-200 transition hover:shadow-md">
            <CardContent className="p-0">
              <div className="h-48 bg-gray-100 flex items-center justify-center rounded-t-md">
                <Newspaper size={36} className="text-ferroverde" />
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2 text-ferroverde">Explorá más historias</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Accedé a la colección completa de historias ferroviarias.
                </p>
                <Button className="bg-ferroverde hover:bg-ferroverde/90 text-white w-full" asChild>
                  <a href="/historias">Explorar historias →</a>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
      {/* ------------------ DESCARGAS DESTACADAS ------------------ */}
      <section
        id="descargas"
        className="scroll-mt-5 w-full max-w-6xl py-16 px-4"
      >
        <h3 className="text-3xl font-semibold text-ferroverde mb-6 text-center">
          DESCARGAS DESTACADAS
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {archivos.map((item, i) => (
            <Card key={i} className="rounded-md transition">
              <CardContent className="p-6 text-center">

                <Download
                  size={36}
                  className="mx-auto text-ferroverde mb-4"
                />

                <h4 className="font-semibold mb-2">{item.title}</h4>

                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

                <Button
                  className="bg-ferroverde hover:bg-ferroverde text-white w-full"
                  asChild
                >
                  <a href={item.href}>Ver Descargas</a>
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* ------------------ FOOTER ------------------ */}
      <footer
        id="contacto"
        className="w-full bg-ferroverde-900 text-gray-100 py-12 px-6 mt-10"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* Navegación */}
          <div>
            <h4 className="font-semibold mb-4 text-base tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:underline hover:text-white/90">Inicio</a></li>
              <li><a href="#mapa" className="hover:underline hover:text-white/90">Mapa</a></li>
              <li><a href="#historias" className="hover:underline hover:text-white/90">Historias</a></li>
              <li><a href="#descargas" className="hover:underline hover:text-white/90">Descargas</a></li>
              <li><a href="#contacto" className="hover:underline hover:text-white/90">Contacto</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-semibold mb-4 text-base tracking-wide">
              Conectá con nosotros
            </h4>

            <p className="text-sm opacity-90 leading-relaxed">
              Seguinos en nuestras redes sociales para más contenido ferroviario.
            </p>

            <div className="flex gap-4 mt-5">
              {[
                {
                  href: "https://www.instagram.com/academialupa/",
                  color: "hover:bg-pink-500",
                  label: "Instagram",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.youtube.com/@academialupa/",
                  color: "hover:bg-red-600",
                  label: "YouTube",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.8-1.6-.8-2-.9C16.3 4.6 12 4.6 12 4.6h-.1s-4.3 0-7 0.3c-.5 0-1.3.1-2 .9-.6.7-.8 2.2-.8 2.2S2 9.6 2 11.1v1.8c0 1.5.2 3.1.2 3.1s.2 1.5.8 2.2c.8 .8 1.9 .7 2.4 .8 1.8 .2 7.6 .3 7.6 .3s4.3 0 7-.3c.5 0 1.3-.1 2-.9.6-.7.8-2.2.8-2.2s.2-1.5.2-3.1v-1.8c0-1.5-.2-3.1-.2-3.1zM10 14.8v-5.6l5.2 2.8-5.2 2.8z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com/",
                  color: "hover:bg-sky-600",
                  label: "LinkedIn",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4" fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5A2.5 2.5 0 107.5 6 2.49 2.49 0 004.98 3.5zM3 8h4v13H3zM9 8h3.8v1.8h.05a4.18 4.18 0 013.75-2c4 0 4.75 2.63 4.75 6V21h-4v-6c0-1.43 0-3.25-2-3.25s-2.3 1.55-2.3 3.15V21H9z" />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
<div>
  <ContactoForm />
</div>

        </div>

        <hr className="border-white/10 mt-10 mb-6" />

        <p className="text-center text-xs opacity-70">
          © 2025 Ferrolupa – Proyecto independiente
        </p>
      </footer>

    </div>
  );
}
