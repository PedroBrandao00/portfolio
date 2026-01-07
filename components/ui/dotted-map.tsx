import { useMemo } from "react";
import { createMap } from "svg-dotted-map";
import { cn } from "@/lib/utils";

interface Marker {
  lat: number;
  lng: number;
  size?: number;
}

export interface DottedMapProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  mapSamples?: number;
  markers?: Marker[];
  dotColor?: string;
  markerColor?: string;
  focusSize?: number;
  dotRadius?: number;
  stagger?: boolean;
}

export function DottedMap({
  width = 150,
  height = 75,
  mapSamples = 12_000,
  markers = [],
  markerColor = "#00bd9d",
  dotRadius = 0.3,
  stagger = true,
  focusSize = 80,
  className,
  style,
}: DottedMapProps) {
  const { points, addMarkers } = createMap({
    width,
    height,
    mapSamples,
  });

  const processedMarkers = addMarkers(markers);
  const marker = processedMarkers[0];

  const { xStep, yToRowIndex } = useMemo(() => {
    const sorted = [...points].sort((a, b) => a.y - b.y || a.x - b.x);
    const rowMap = new Map<number, number>();
    let step = 0;
    let prevY = Number.NaN;
    let prevX = Number.NaN;

    for (const p of sorted) {
      if (p.y !== prevY) {
        prevY = p.y;
        prevX = Number.NaN;
        if (!rowMap.has(p.y)) {
          rowMap.set(p.y, rowMap.size);
        }
      }
      if (!Number.isNaN(prevX)) {
        const delta = p.x - prevX;
        if (delta > 0) {
          step = step === 0 ? delta : Math.min(step, delta);
        }
      }
      prevX = p.x;
    }

    return { xStep: step || 1, yToRowIndex: rowMap };
  }, [points]);

  const viewBox = useMemo(() => {
    if (!marker) {
      return `0 0 ${width} ${height}`;
    }

    const half = focusSize / 2;

    const minX = Math.max(0, marker.x - half);
    const minY = Math.max(0, marker.y - half);

    return `${minX} ${minY} ${focusSize} ${focusSize}`;
  }, [marker, focusSize, width, height]);

  return (
    <svg
      className={cn("text-gray-500 dark:text-gray-500", className)}
      style={{ width: "100%", height: "100%", ...style }}
      viewBox={viewBox}
    >
      <title>map</title>
      {points.map((point, index) => {
        const rowIndex = yToRowIndex.get(point.y) ?? 0;
        const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0;
        return (
          <circle
            cx={point.x + offsetX}
            cy={point.y}
            fill="currentColor"
            key={`${point.x}-${point.y}-${index}`}
            r={dotRadius}
          />
        );
      })}
      {processedMarkers.map((marker, index) => {
        const rowIndex = yToRowIndex.get(marker.y) ?? 0;
        const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0;
        return (
          <circle
            cx={marker.x + offsetX}
            cy={marker.y}
            fill={markerColor}
            key={`${marker.x}-${marker.y}-${index}`}
            r={marker.size ?? dotRadius}
          />
        );
      })}
    </svg>
  );
}
