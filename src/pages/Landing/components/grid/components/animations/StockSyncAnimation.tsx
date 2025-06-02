import { useTheme } from "@mui/material/styles";
import { Box, Grid, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

export const StockSyncAnimation = () => {
  const theme = useTheme();
  const boxSize = "48px";
  const [text, setText] = useState("");
  const [showLine, setShowLine] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lineTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // setText için debounce fonksiyon
  const setTextFor = useCallback((newText: string) => {
    setText(newText);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setText(""), 900);
  }, []);

  const triggerLineEffect = useCallback(() => {
    setShowLine(true);
    if (lineTimeoutRef.current) clearTimeout(lineTimeoutRef.current);
    lineTimeoutRef.current = setTimeout(() => setShowLine(false), 500);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (lineTimeoutRef.current) clearTimeout(lineTimeoutRef.current);
    };
  }, []);

  return (
    <Stack
      direction="row"
      alignItems="center"
      height="100%"
      overflow="hidden"
      justifyContent="space-between"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={0.25}
        flex={2}
      >
        <Grid
          size={{ xs: 12 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <motion.div
            animate={{
              y: [0, -100, -100, 0, 0],
              rotate: [0, -45, -45, 0, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.1, 0.5, 0.59, 1],
              ease: "linear",
              repeat: Infinity,
            }}
            onUpdate={(latest) => {
              const y = Number(latest.y);
              if (y === -100) {
                setTextFor("-1");
              } else if (y === 0) {
                setTextFor("+1");
                triggerLineEffect();
              }
            }}
            style={{
              borderRadius: 5,
              width: boxSize,
              height: boxSize,
              display: "inline-block",
              backgroundColor: theme.palette.primary.main,
              position: "relative",
              overflow: "visible",
            }}
          >
            <AnimatePresence>
              {showLine && (
                <>
                  <motion.span
                    key="line-left"
                    initial={{ opacity: 1, x: 0, y: 0 }}
                    animate={{ opacity: 0, x: -45, y: -45 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      width: 2,
                      height: 2,
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1,
                      bottom: 0,
                      left: 0,
                      pointerEvents: "none",
                    }}
                  />
                  <motion.span
                    key="line-right"
                    initial={{ opacity: 1, x: 0, y: 0 }}
                    animate={{ opacity: 0, x: 45, y: -45 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      width: 2,
                      height: 2,
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1,
                      bottom: 0,
                      right: 0,
                      pointerEvents: "none",
                    }}
                  />
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </Grid>

        <Grid
          size={{ xs: 6 }}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: theme.palette.primary.main,
              width: boxSize,
              height: boxSize,
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 6 }}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: theme.palette.primary.main,
              width: boxSize,
              height: boxSize,
            }}
          />
        </Grid>
      </Grid>

      <Box flex={1}>
        <Box
          sx={{
            width: `calc(${boxSize} * 1.8)`,
            height: `calc(${boxSize} * 3)`,
            border: `5px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            display: "flex",
            p: 0.625,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              width: "50%",
              height: 4,
              background: theme.palette.primary.main,
              transform: "translate(-50%)",
              borderBottomLeftRadius: 0.25,
              borderBottomRightRadius: 0.25,
            }}
          />
          <AnimatePresence>
            {text && (
              <motion.span
                key={text}
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1.2, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                  duration: 0.4,
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  background: theme.palette.primary.dark,
                  height: 32,
                  width: 32,
                  borderRadius: "50%",
                }}
              >
                {text}
              </motion.span>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </Stack>
  );
};
