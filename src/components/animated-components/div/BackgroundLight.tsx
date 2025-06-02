import { Box, useTheme } from "@mui/material";

type BackgroundLightProps = {
  color?: string; // örnek: '#ff5722' veya 'red'
  size?: number; // dairenin çapı (px cinsinden)
  intensity?: number; // parlaklık yoğunluğu (varsayılan: 0.1)
  top?: string | number; // örnek: '10px' veya 20
  left?: string | number; // örnek: '10px' veya 20
  right?: string | number; // örnek: '10px' veya 20 (default: 0)
  bottom?: string | number; // isteğe bağlı, eğer lazım olursa
};

export const BackgroundLight = ({
  color,
  size = 512,
  intensity = 0.1,
  top,
  left,
  right,
  bottom,
}: BackgroundLightProps) => {
  const theme = useTheme();
  const lightColor = color ?? theme.palette.primary.main;

  // bottom varsa top default olarak 0 verilmesin
  // left varsa right default olarak 0 verilmesin

  // top ve right için default değerleri koşullu ayarlıyoruz:
  const computedTop = bottom !== undefined ? undefined : top ?? 0;
  const computedRight = left !== undefined ? undefined : right ?? 0;

  return (
    <Box
      sx={{
        position: "fixed",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: lightColor,
        opacity: intensity,
        filter: `blur(${size * 0.25}px)`,
        zIndex: -1,
        pointerEvents: "none",
        top: computedTop,
        left,
        right: computedRight,
        bottom,
      }}
    />
  );
};
