import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    // ruta al geojson dentro de data/mapa
    const filePath = path.join(process.cwd(), "data/mapa/Red_Principal.geojson");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const geojson = JSON.parse(fileContents);

    // devolvemos en formato "capas" como buscamos en MapFerrolupa
    const response = {
      capas: [
        {
          nombre: "Red_Principal",
          datos: geojson,
        },
      ],
    };

    return NextResponse.json(response);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ capas: [] });
  }
}