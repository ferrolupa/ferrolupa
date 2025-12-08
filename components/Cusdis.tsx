"use client";
import { useEffect, useState } from "react";

export default function Cusdis() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);

    const iframe = document.querySelector("#cusdis_thread iframe") as any;
    if (iframe) iframe.src = iframe.src;
  }, []);

  if (!url) return null;

  return (
    <div
      id="cusdis_thread"
      data-host="https://cusdis.com"
      data-app-id="c3ea5460-7596-4360-a786-09ef589d72b8"
      data-page-id={url}
      data-page-title={url}
      data-page-url={url}
      data-theme={JSON.stringify({
        palette: {
          accent: "#00663E", // ferroverde
          background: "#f8f8f8",
          text: "#333333",
          subtext: "#555555",
          inputBorder: "#cccccc",
          inputBackground: "#ffffff",
        },
        typography: {
          fontSize: "14px",
          lineHeight: "1.5",
          radius: "8px",
        },
      })}
    />
  );
}
