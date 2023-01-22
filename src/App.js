import React from "react";

import StylesProvider from "@mui/styles/StylesProvider";
import jssPreset from "@mui/styles/jssPreset";
import { create } from "jss";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components/macro";
import createTheme from "./theme";
import ThemeUseContext from "./hooks/ThemeUseContext";

import { AuthProvider } from "./contexts/AuthCreateContext";
import { Router } from "./router/Router";

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

function App() {
  const { theme } = ThemeUseContext();

  return (
    <StylesProvider jss={jss}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={createTheme(theme)}>
            <ThemeProvider theme={createTheme(theme)}>
              <AuthProvider>
                <Router />
              </AuthProvider>
            </ThemeProvider>
          </MuiThemeProvider>
        </StyledEngineProvider>
      </LocalizationProvider>
    </StylesProvider>
  );
}

export default App;
