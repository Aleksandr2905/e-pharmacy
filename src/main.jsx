// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyles />
  </ThemeProvider>
  // </React.StrictMode>
);
