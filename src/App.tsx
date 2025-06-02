import { CssBaseline } from "@mui/material";
import { ColorModeContextProvider } from "./providers/ColorModeProvider";
import { LocalizationProvider } from "./providers/LocalizationProvider";
import { SyncrosaleRouter } from "./router/SyncrosaleRouter";
import FarewellMessage from "./components/Farewell";

const App = () => {
  return (
    <LocalizationProvider>
      <ColorModeContextProvider>
        <CssBaseline />
        <SyncrosaleRouter />
        <FarewellMessage />
      </ColorModeContextProvider>
    </LocalizationProvider>
  );
};

export default App;
