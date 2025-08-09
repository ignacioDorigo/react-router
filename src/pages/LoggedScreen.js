import React, { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export default function LoggedScreen() {
  const { logout, usuario } = useContext(UsuarioContext);
  return (
    <div>
      <h1>LoggedScreen</h1>
      <h2>
        Hola {usuario.nombre} {usuario.apellido}
      </h2>
    </div>
  );
}
