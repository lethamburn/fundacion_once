import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./utils/theme.js";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./components/GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
