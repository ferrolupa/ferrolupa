"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl, useMap } from "react-leaflet";
import type { FeatureCollection, Geometry } from "geojson";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

const FERRO = "#00663E";

/** Controla scrollWheelZoom según "active" sin whenCreated/whenReady */
function MapBehavior({ active }: { active: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    if (active) map.scrollWheelZoom.enable();
    else map.scrollWheelZoom.disable();
  }, [map, active]);

  useEffect(() => {
    map.scrollWheelZoom.disable(); // arranca desactivado
  }, [map]);

  return null;
}

export default function MapFerrolupa() {
  const [tramos, setTramos] = useState<FeatureCollection<Geometry> | null>(null);
  const [estaciones, setEstaciones] = useState<FeatureCollection<Geometry> | null>(null);
  const [depositos, setDepositos] = useState<FeatureCollection<Geometry> | null>(null);

  const [active, setActive] = useState(false);

  // Datos
  useEffect(() => {
    Promise.all([
      fetch("/data/red_tramos.geojson").then(r => r.json()).catch(() => null),
      fetch("/data/Prueba1.geojson").then(r => r.json()).catch(() => null),
      fetch("/data/depositos.geojson").then(r => r.json()).catch(() => null),
    ]).then(([t, e, d]) => {
      if (t) setTramos(t);
      if (e) setEstaciones(e);
      if (d) setDepositos(d);
    });
  }, []);

  // Popup genérico
  const onEach = (feature: any, layer: any) => {
    if (!feature?.properties) return;
    const rows = Object.entries(feature.properties)
      .map(([k, v]) => `<tr><td style="padding:2px 6px;"><b>${k}</b></td><td style="padding:2px 6px;">${v}</td></tr>`)
      .join("");
    layer.bindPopup(`<table>${rows}</table>`);
  };

  // Activar / desactivar
  const activate = () => setActive(true);
  const deactivate = () => setActive(false);

  // Escape para desactivar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") deactivate();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="relative w-full h-[500px] select-none"
      onMouseLeave={deactivate} // salir del mapa desactiva
    >
      {/* Borde por encima de Leaflet panes */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl z-[1090] transition-all duration-150 ${
          active ? "border-4 shadow-2xl" : "border shadow-sm"
        }`}
        style={{ borderColor: active ? FERRO : "#e5e7eb" }}
      />

      {/* Capa de activación: capta el primer click; luego desaparece */}
      {!active && (
        <div
          role="button"
          aria-label="Activar mapa"
          onPointerDown={activate}
          onClick={activate}
          className="absolute inset-0 rounded-2xl z-[1100] cursor-pointer bg-transparent"
        />
      )}

      {/* Mapa */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <MapContainer
          center={[-38.4161, -63.6167]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
        >
          <MapBehavior active={active} />

          <LayersControl position="topright">
            {/* Bases */}
            <LayersControl.BaseLayer checked name="CartoDB Positron (sin etiquetas)">
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
                attribution="&copy; CartoDB, OpenStreetMap contributors"
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="ESRI World Imagery (satélite)">
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution='Tiles © Esri — Sources: Esri, Garmin, GEBCO, NOAA, METI/NASA, USGS, etc.'
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="IGN Argentina">
              <TileLayer
                url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png"
                tms={true}
                attribution="&copy; IGN Argentina"
              />
            </LayersControl.BaseLayer>

            {/* Overlays */}
            {tramos && (
              <LayersControl.Overlay checked name="Tramos">
                <GeoJSON data={tramos} onEachFeature={onEach} style={() => ({ color: FERRO, weight: 2 })} />
              </LayersControl.Overlay>
            )}

            {estaciones && (
              <LayersControl.Overlay checked name="Estaciones">
                <GeoJSON
                  data={estaciones}
                  onEachFeature={onEach}
                  pointToLayer={(_, latlng) =>
                    L.circleMarker(latlng, {
                      radius: 5,
                      color: FERRO,
                      weight: 2,
                      fillColor: FERRO,
                      fillOpacity: 0.9,
                    })
                  }
                />
              </LayersControl.Overlay>
            )}

            {depositos && (
              <LayersControl.Overlay name="Depósitos">
                <GeoJSON
                  data={depositos}
                  onEachFeature={onEach}
                  pointToLayer={(_, latlng) =>
                    L.circleMarker(latlng, {
                      radius: 6,
                      color: "#00462C",
                      weight: 2,
                      fillColor: "#00462C",
                      fillOpacity: 0.9,
                    })
                  }
                />
              </LayersControl.Overlay>
            )}
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}
