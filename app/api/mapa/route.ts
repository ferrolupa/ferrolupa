// /app/api/mapa/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  // path al GeoJSON
  const filePath = path.join(process.cwd(), "data/mapa/Red_Principal.geojson");
  const geojsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const capas = [
    {
      nombre: "Red_Principal",
      datos: geojsonData, // esto tiene que ser TODO el FeatureCollection
    },
  ];

  return NextResponse.json({ capas });
}