import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const THEME = createTheme({
    typography: {
      fontFamily: `"Roboto"`,
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#FFFFFF",
            "&:hover": {
              color: "#CCCCCC",
            },
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            color: "#FFFFFF",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#009B86",
            "&:hover": {
              backgroundColor: "#34AC9C",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={THEME}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
