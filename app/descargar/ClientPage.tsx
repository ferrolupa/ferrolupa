"use client";

import { Suspense } from "react";
import DownloadPage from "./DownloadPage";

export default function ClientWrapper() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <DownloadPage />
    </Suspense>
  );
}
