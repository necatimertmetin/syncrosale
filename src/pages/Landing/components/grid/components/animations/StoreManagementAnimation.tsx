import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";
import canada from "../../../../../../assets/canada.png";
import mexico from "../../../../../../assets/mexico.png";
import uk from "../../../../../../assets/uk.png";
import us from "../../../../../../assets/us.png";
import singapor from "../../../../../../assets/singapor.png";
import syncrosale from "../../../../../../assets/Syncrosale.png";
import React from "react";

interface Store {
  flag: string;
  color: string;
  name: string;
}

const stores: Store[] = [
  { flag: canada, color: "#E53E3E", name: "Canada" },
  { flag: mexico, color: "#2196F3", name: "Mexico" },
  { flag: uk, color: "#4CAF50", name: "UK" },
  { flag: us, color: "#9C27B0", name: "USA" },
  { flag: singapor, color: "#FF9800", name: "Singapore" },
];

const StoreNode = React.memo(
  ({
    store,
    isActive,
    position,
  }: {
    store: Store;
    isActive: boolean;
    position: { x: number; y: number };
  }) => {
    return (
      <motion.div
        animate={{
          scale: isActive ? 1.3 : 1,
          x: position.x,
          y: position.y,
          boxShadow: isActive
            ? `0 6px 20px ${store.color}66`
            : `0 3px 10px ${store.color}44`,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: isActive ? 5 : 2,
          border: isActive ? "2px solid white" : "none",
        }}
      >
        <img src={store.flag} width={"28px"} />
      </motion.div>
    );
  }
);

export const StoreManagementAnimation = () => {
  const theme = useTheme();
  const [activeStore, setActiveStore] = useState(0);
  const [syncPulse, setSyncPulse] = useState(false);

  const storePositions = useMemo(() => {
    return stores.map((_, index) => {
      const angle = (index * 360) / stores.length;
      const radius = 70;
      const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
      const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
      return { x, y };
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncPulse(true);
      setTimeout(() => setSyncPulse(false), 800);
      setActiveStore((prev) => (prev + 1) % stores.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          animate={{
            scale: syncPulse ? [1, 1.1, 1] : 1,
            boxShadow: syncPulse
              ? [
                  `0 0 0 0 ${theme.palette.primary.main}33`,
                  `0 0 0 20px ${theme.palette.primary.main}00`,
                ]
              : "0 4px 16px rgba(102, 126, 234, 0.3)",
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: theme.palette.background.default,
            border: `2px solid ${theme.palette.primary.dark}`,
            filter: `drop-shadow(0px 0px 15px ${theme.palette.primary.dark})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <img src={syncrosale} height={"24px"} />
        </motion.div>

        {stores.map((store, index) => (
          <StoreNode
            key={index}
            store={store}
            isActive={activeStore === index}
            position={storePositions[index]}
          />
        ))}

        <svg
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
          }}
          viewBox="0 0 180 180"
        >
          {stores.map((store, index) => {
            const angle = (index * 360) / stores.length;
            const radius = 70;
            const x = 90 + Math.cos((angle - 90) * (Math.PI / 180)) * radius;
            const y = 90 + Math.sin((angle - 90) * (Math.PI / 180)) * radius;
            return (
              <motion.line
                key={index}
                x1={90}
                y1={90}
                x2={x}
                y2={y}
                stroke={store.color}
                strokeWidth={2}
                strokeDasharray={syncPulse ? "4 4" : "0"}
                animate={{
                  opacity: syncPulse ? 1 : 0.5,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            );
          })}
        </svg>
      </Box>
    </Box>
  );
};
