import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Bar {
  id: number;
  height: number;
  label: string;
}

const INTERVAL_MS = 2000;
const BAR_WIDTH = 20;

export const ReportsAnimation: React.FC = () => {
  const theme = useTheme();

  const [bars, setBars] = useState<Bar[]>([
    { id: 1, height: 10, label: "15:00" },
    { id: 2, height: 60, label: "15:05" },
    { id: 3, height: 40, label: "15:10" },
    { id: 4, height: 30, label: "15:15" },
    { id: 5, height: 20, label: "15:20" },
    { id: 6, height: 10, label: "15:25" },
    { id: 7, height: 50, label: "15:30" },
  ]);

  const nextId = useRef(8);

  // Yeni label üretme fonksiyonu (zaman hesaplaması)
  const getNextLabel = (lastLabel: string): string => {
    const [hour, minute] = lastLabel.split(":").map(Number);
    let newMinute = minute + 5;
    let newHour = hour;
    if (newMinute >= 60) {
      newMinute -= 60;
      newHour = (hour + 1) % 24;
    }
    return `${newHour.toString().padStart(2, "0")}:${newMinute
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) => {
        const newBars = prev.slice(1); // Sol baştaki bar'ı sil
        const lastBar = newBars[newBars.length - 1];
        const newLabel = getNextLabel(lastBar.label);

        newBars.push({
          id: nextId.current,
          height: Math.random() * 80,
          label: newLabel,
        });

        nextId.current += 1;
        return newBars;
      });
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            gap: 1.5,
            px: 2,
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="popLayout">
            {bars.map((bar, index) => (
              <motion.div
                key={bar.id}
                layout
                initial={{ x: 50, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -50, opacity: 0, scale: 0.8 }}
                transition={{
                  layout: { duration: 0.5, ease: "easeInOut" },
                  x: { duration: 0.5, ease: "easeOut" },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 },
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: bar.height,
                    backgroundColor:
                      index === bars.length - 1
                        ? theme.palette.success.main
                        : theme.palette.primary.main,
                  }}
                  transition={{
                    height: { duration: 0.8, ease: "easeOut" },
                    backgroundColor: { duration: 1.5 },
                  }}
                  style={{
                    width: BAR_WIDTH,
                    borderRadius: "4px 4px 0 0",
                    boxShadow:
                      index === bars.length - 1
                        ? `0 4px 12px ${theme.palette.success.main}44`
                        : `0 2px 8px ${theme.palette.primary.main}33`,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      index === bars.length - 1
                        ? theme.palette.success.main
                        : theme.palette.text.secondary,
                    fontWeight: index === bars.length - 1 ? 600 : 500,
                    fontSize: "0.7rem",
                    transition: "color 1s ease",
                  }}
                >
                  {bar.label}
                </Typography>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: theme.palette.success.main,
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.8rem",
            }}
          >
            Live Analytics • {bars[bars.length - 1]?.label}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
