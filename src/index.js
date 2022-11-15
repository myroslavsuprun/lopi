import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "components";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/lopi">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
