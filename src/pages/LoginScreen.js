import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

export default function LoginScreen({ loginUsuario }) {
  return <LoginForm loginUsuario={loginUsuario}></LoginForm>;
}
