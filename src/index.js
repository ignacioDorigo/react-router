import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router";
import { UsuarioContext, UsuarioProvider } from "./context/UsuarioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UsuarioProvider>
        <App />
      </UsuarioProvider>
    </BrowserRouter>
  </React.StrictMode>
);
