// components/Landing/ConnectorSVG.tsx
import { useTheme } from "@mui/material";

type ConnectorSVGProps = {
  paths: string[];
  width: number;
  height: number;
};

export const ConnectorSVG = ({ paths, width, height }: ConnectorSVGProps) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "visible",
      }}
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={theme.palette.primary.main}
          strokeWidth={2}
          fill="none"
          style={{
            strokeDasharray: 800,
            strokeDashoffset: 1000,
            animation: `dash 2s ease-in forwards`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
};
