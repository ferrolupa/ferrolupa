import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const folder = path.join(process.cwd(), "public/descargas");
  const files = fs.readdirSync(folder);
  const list = files.map((file) => ({
    name: file,
    url: `/descargas/${file}`,
  }));
  return NextResponse.json(list);
}
