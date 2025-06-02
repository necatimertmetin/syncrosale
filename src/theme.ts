import type { ButtonProps } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// MUI palette genişletme
declare module "@mui/material/styles" {
  interface Palette {
    customBackground: {
      box: string;
    };
    highlightedRow: {
      main: string;
    };
  }

  interface PaletteOptions {
    customBackground?: {
      box: string;
    };
    highlightedRow?: {
      main: string;
    };
  }
}

// Light Theme
const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D35400",
      light: "#E67E22",
      dark: "#A84300",
      contrastText: "#fff", // primary button yazısı için
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#222222", // koyu gri - ana yazı
      secondary: "#555555", // yardımcı yazılar
    },
    customBackground: {
      box: "#f5f5f5",
    },
    highlightedRow: {
      main: "#f0f8ff",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: `"Space Grotesk", "Montserrat", sans-serif`,
      },
      styleOverrides: {
        root: {
          color: "#222222", // açık tema için yazı rengi koyu
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "default",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "white",
          height: "64px",
          color: "#222222", // appbar yazısı koyu olsun
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#fff", // body arka plan beyaz
          color: "#222222", // body yazı koyu
        },
        "main.MuiBox-root": {
          backgroundColor: "#f5f5f5",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({
          ownerState,
        }: {
          ownerState: { variant?: string; color?: string };
        }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "#fff",
            }),
        }),
      },
    },
  },
});

// Dark Theme
const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF6F00",
      light: "#FFA040",
      dark: "#C43E00",
    },
    background: {
      default: "#0d0d0d",
      paper: "#121212",
    },
    customBackground: {
      box: "#1a1a1a",
    },
    highlightedRow: {
      main: "#2a2a2a",
    },
  },
  typography: {
    fontFamily: `"Space Grotesk", "Montserrat", sans-serif`,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "default",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#121212",
          height: "64px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "#fff",
            }),
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0d0d0d",
          color: "#ffffff",
        },
        "main.MuiBox-root": {
          backgroundColor: "#1a1a1a",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: `"Space Grotesk", sans-serif`,
      },
    },
  },
});

// Responsive hale getir
const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

// Export et
export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
