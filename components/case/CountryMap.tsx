"use client";

import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const FOCUS_COUNTRIES: Record<string, { label: string }> = {
  "646": { label: "Rwanda" },
  "404": { label: "Kenya" },
  "800": { label: "Uganda" },
  "834": { label: "Tanzania" },
  "108": { label: "Burundi" },
  "180": { label: "DRC" },
};

interface Props {
  coordinates: [number, number];
  country: string;
}

export default function CountryMap({ coordinates, country }: Props) {
  // Fade in after mount — avoids any setState-during-render
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const center: [number, number] = [29.5, -1.5];

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-border/50 bg-[#070f1f]">
      {/* Skeleton while fading in */}
      {!visible && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-text-muted animate-pulse">Loading map…</span>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.9 }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center, scale: 1400 }}
          width={800}
          height={500}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const numId = geo.id as string;
                const config = FOCUS_COUNTRIES[numId];
                if (!config) return null;
                const isRwanda = numId === "646";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isRwanda ? "#38bdf8" : "#132035",
                        stroke: "#0d1e35",
                        strokeWidth: isRwanda ? 1.5 : 0.8,
                        filter: isRwanda
                          ? "drop-shadow(0 0 12px rgba(212,168,67,0.6))"
                          : "none",
                        outline: "none",
                      },
                      hover: {
                        fill: isRwanda ? "#f0c158" : "#1a3050",
                        stroke: "#0d1e35",
                        strokeWidth: 1,
                        outline: "none",
                      },
                      pressed: { fill: isRwanda ? "#f0c158" : "#1a3050", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Kigali marker */}
          <Marker coordinates={[30.06, -1.94]}>
            <motion.circle
              initial={{ r: 0 }}
              animate={{ r: 5 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              fill="#fff"
              stroke="#38bdf8"
              strokeWidth={2}
            />
            <motion.circle
              fill="none"
              stroke="#38bdf8"
              strokeWidth={1}
              animate={{ r: [8, 20], opacity: [0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              textAnchor="middle"
              y={-12}
              style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fill: "#f1f5f9", fontWeight: 500 }}
            >
              Kigali
            </motion.text>
          </Marker>
        </ComposableMap>
      </motion.div>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-mechanism opacity-90" />
          <span className="text-[10px] text-text-muted">{country}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#132035]" />
          <span className="text-[10px] text-text-muted">Neighbors</span>
        </div>
      </div>

      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-ink-950/80 border border-border/50 backdrop-blur-sm">
        <span className="text-xs text-text-secondary font-medium">Great Lakes Region</span>
      </div>
    </div>
  );
}
