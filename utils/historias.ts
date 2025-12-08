import { historias } from "@/data/historiasIndex";

export function elegirHistoriasDelDia(cantidad: number) {
  const seed = parseInt(new Date().toISOString().slice(0,10).replace(/-/g, ""));
  const mezcladas = [...historias].sort(() => Math.sin(seed) - 0.5);
  return mezcladas.slice(0, cantidad);
}
