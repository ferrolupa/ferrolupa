// /data/historiasIndex.ts

export const historias = [
  {
    id: "001",

    // Slug unificado (el del sitio real)
    slug: "/historias/001",

    // Campos que coinciden
    titulo: "Durmientes que despertaron",
    fecha: "3 de enero, 2025",
    bajada: "La historia inesperada de un ramal que volvió a la vida.",

    // Miniatura del listado (si en algún lado difiere, usamos sufijo 'Listado')
    miniaturaListado: "/historias/mini1.jpg",

    // Imagen grande que solo usaba el listado
    imagenListado: "/historias/dos.jpg",

    // Contenido HTML usado en el listado
    contenidoListado: `
      <p>Tras años de abandono, un grupo de vecinos decidió recuperar el ramal.</p>
      <p>La reapertura simbólica despertó la memoria ferroviaria del lugar.</p>
    `,

    // Video para la página individual
    videoId: "bc0KhhjJP98",
  },

  {
    id: "002",

    slug: "/historias/002",

    titulo: "El tren que unió dos pueblos",
    fecha: "10 de enero, 2025",
    bajada: "Un pequeño episodio que marcó a dos comunidades.",

    miniaturaListado: "/historias/mini2.jpg",
    imagenListado: "/historias/uno.jpg",

    contenidoListado: `
      <p>La llegada del tren cambió para siempre la dinámica entre ambos pueblos.</p>
      <p>Fue un antes y un después social, económico y cultural.</p>
    `,

    videoId: "eH3giaIzONA?",
  },
];
