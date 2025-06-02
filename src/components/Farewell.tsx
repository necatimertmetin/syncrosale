import { useEffect, useState } from "react";
import { Backdrop, Stack } from "@mui/material";
import { AnimatedSplitText } from "./animated-components/text/AnimatedSplitText";

const FarewellMessage = () => {
  const [showFarewell, setShowFarewell] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowFarewell(true);
      }
    };

    const handleMouseOver = () => {
      setShowFarewell(false);
    };

    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <Backdrop
      open={showFarewell}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1,
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 1)",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" spacing={0.5}>
        <AnimatedSplitText
          text="Syncrosale"
          fontSize="7rem"
          start={showFarewell}
          fontWeight={500}
        />
      </Stack>
    </Backdrop>
  );
};

export default FarewellMessage;
