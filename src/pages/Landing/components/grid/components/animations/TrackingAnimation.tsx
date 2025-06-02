import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "framer-motion";
import { useTheme } from "@mui/material";

const pathD = `
  M 20 120 
  C 80 20, 220 20, 280 120 
  S 420 220, 480 120
`;

export const TrackingAnimation: React.FC = () => {
  const theme = useTheme();
  const progress = useMotionValue(0);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, []);

  // progress 0-1 arası değeri strokeDasharray için dönüştür
  const strokeDasharray = useTransform(
    progress,
    (p) => `${length * p} ${length}`
  );

  // marker cx, cy için motion değerleri
  const cx = useTransform(progress, (p) => {
    if (!pathRef.current || length === 0) return 0;
    return pathRef.current.getPointAtLength(length * p).x;
  });

  const cy = useTransform(progress, (p) => {
    if (!pathRef.current || length === 0) return 0;
    return pathRef.current.getPointAtLength(length * p).y;
  });

  useAnimationFrame((t) => {
    const newProgress = (t / 4000) % 1;
    progress.set(newProgress);
  });

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 500 200"
      style={{ overflow: "visible" }}
    >
      {/* İlerleyen yol */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={theme.palette.primary.main}
        strokeWidth={4}
        style={{
          strokeDasharray,
          strokeDashoffset: 0,
        }}
      />
      {/* Geri kalan yol */}
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="transparent"
        strokeWidth={4}
        strokeDasharray={`${length} ${length}`}
        strokeDashoffset={length ? -length * progress.get() : 0}
      />
      {/* Hareket eden nokta */}
      <motion.circle
        r={8}
        fill="white"
        stroke={theme.palette.primary.main}
        strokeWidth={4}
        cx={cx}
        cy={cy}
      />
    </svg>
  );
};
