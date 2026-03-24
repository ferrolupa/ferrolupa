"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl, useMap } from "react-leaflet";
import type { FeatureCollection, Geometry } from "geojson";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";


const FERRO = "#00663E";

/** Controla scrollWheelZoom según "active" */
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
  const [redPrincipal, setRedPrincipal] = useState<FeatureCollection<Geometry> | null>(null);
  const [active, setActive] = useState(false);

  // Fetch Red_Principal
  useEffect(() => {
    fetch("/api/mapa")
      .then((r) => r.json())
      .then((data) => {
        const red = data.capas.find((c: any) => c.nombre === "Red_Principal");
        if (red) setRedPrincipal(red.datos);
      })
      .catch(() => null);
  }, []);

  // Función para popups y hover
  const onEach = (feature: any, layer: any) => {
    if (!feature?.properties) return;

    // Popups
    const rows = Object.entries(feature.properties)
      .map(([k, v]) => `<tr><td style="padding:2px 6px;"><b>${k}</b></td><td style="padding:2px 6px;">${v}</td></tr>`)
      .join("");
    layer.bindPopup(`<table>${rows}</table>`);

    // Hover: aumenta grosor visual al pasar el mouse
    layer.on("mouseover", () => layer.setStyle({ weight: 4 }));
    layer.on("mouseout", () => layer.setStyle({ weight: 2 }));
  };

  // Ajustar bounds del mapa cuando se cargue la capa
  const FitBoundsOnLoad = ({ geojson }: { geojson: FeatureCollection<Geometry> }) => {
    const map = useMap();
    useEffect(() => {
      const layer = L.geoJSON(geojson);
      map.fitBounds(layer.getBounds(), { padding: [50, 50] });
    }, [map, geojson]);
    return null;
  };

  // Activar / desactivar scroll
  const activate = () => setActive(true);
  const deactivate = () => setActive(false);

  return (
    <div
      className="relative w-full h-[500px] select-none"
      onMouseLeave={deactivate}
    >
      {/* Borde por encima de Leaflet panes */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl z-[1090] transition-all duration-150 ${
          active ? "border-4 shadow-2xl" : "border shadow-sm"
        }`}
        style={{ borderColor: active ? FERRO : "#e5e7eb" }}
      />

      {/* Capa de activación */}
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
          center={[-40.50, -63.6167]}
          zoom={4}
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

            {/* Overlay Red_Principal */}
            {redPrincipal && (
              <LayersControl.Overlay checked name="Red Principal">
                <GeoJSON
                  data={redPrincipal}
                  onEachFeature={onEach}
                  style={() => ({ color: FERRO, weight: 2, className: "clickable-line" })}
                />
              </LayersControl.Overlay>
            )}
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}