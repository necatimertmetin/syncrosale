import { Box, useTheme } from "@mui/material";

type BackgroundLightProps = {
  color?: string; // örnek: '#ff5722' veya 'red'
  size?: number; // dairenin çapı (px cinsinden)
  intensity?: number; // parlaklık yoğunluğu (varsayılan: 0.6)
};

export const BackgroundLight = ({
  color,
  size = 512,
  intensity = 0.1,
}: BackgroundLightProps) => {
  const theme = useTheme();
  const lightColor = color ?? theme.palette.primary.main;

  return (
    <Box
      sx={{
        position: "fixed",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: lightColor,
        opacity: intensity,
        filter: `blur(${size * 0.25}px)`, // daire boyutuna göre dinamik blur
        zIndex: -1,
        pointerEvents: "none", // tıklamayı engelle
        top: "0",
        right: "0",
      }}
    />
  );
};
