export type Historia = {
  id: string
  slug: string
  titulo: string
  fecha: string
  bajada: string
  miniaturaListado: string
  imagenListado: string
  contenidoListado: string
  videoId: string
  historiaTexto: string
}

import historiasData from './historias/historias.json'

export const historias = historiasData