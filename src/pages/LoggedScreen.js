import React, { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router";

export default function LoggedScreen() {
  const { logout, usuario } = useContext(UsuarioContext);
  const navigate = useNavigate();

  if (!usuario) return null;

  const goToLogin = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <h1>LoggedScreen</h1>
      <h2>
        Hola {usuario.nombre} {usuario.apellido}
      </h2>

      <Button
        onClick={() => {
          goToLogin();
        }}
      >
        Cerrar Sesión
      </Button>
    </div>
  );
}
