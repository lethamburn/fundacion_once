import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./components/GlobalStyles.jsx";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "hotpink",
    secondary: "crimson",
    tertiary: "black",
    warning: "orange",
    danger: "red",
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Helvetica, sans-serif",
  },
  sizing: {
    xl: "28px",
    mid: "22px",
    sm: "12px",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
