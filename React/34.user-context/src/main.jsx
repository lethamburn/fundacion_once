import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Login from "./pages/Login/Login.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/usercontext.jsx";
import "./index.css";
import AuthRoute from "./components/AuthRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/gallery"
              element={
                <AuthRoute>
                  <Gallery />
                </AuthRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
