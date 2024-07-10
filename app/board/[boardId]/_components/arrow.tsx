import React from "react";
import { colorToCss } from "@/lib/utils";
import { ComplexLineLayer } from "@/types/canvas";

interface ComplexLineProps {
  id: string;
  layer: ComplexLineLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const ComplexLine = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: ComplexLineProps) => {
  const { points, stroke, strokeWidth } = layer;

  // Function to generate the SVG path
  const generatePath = () => {
    if (points.length < 2) return "";
    return (
      `M ${points[0].x} ${points[0].y} ` +
      points
        .slice(1)
        .map((point) => `L ${point.x} ${point.y}`)
        .join(" ")
    );
  };

  return (
    <g>
      {/* Main line */}
      <path
        d={generatePath()}
        stroke={selectionColor || (stroke ? colorToCss(stroke) : "#000")}
        strokeWidth={strokeWidth}
        fill="none"
        className="drop-shadow-md"
        onPointerDown={(e) => onPointerDown(e, id)}
      />

      {/* Control points */}
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r={4}
          fill={selectionColor ? "#4299e1" : "#fff"}
          stroke={selectionColor || "#2b6cb0"}
          strokeWidth={2}
          onPointerDown={(e) => onPointerDown(e, `${id}-point-${index}`)}
        />
      ))}
    </g>
  );
};
