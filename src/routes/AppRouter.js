import React from "react";
import { Route, Routes } from "react-router";
import LoginScreen from "../pages/LoginScreen";
import HomeScreen from "../pages/HomeScreen";
import RegisterScreen from "../pages/RegisterScreen";
import LoggedScreen from "../pages/LoggedScreen";

export default function AppRouter({ registrarUsuario, loginUsuario }) {
  return (
    <Routes registrarUsuario={registrarUsuario}>
      <Route path="/" element={<HomeScreen></HomeScreen>} />
      <Route
        path="/login"
        element={<LoginScreen loginUsuario={loginUsuario}></LoginScreen>}
      />
      <Route
        path="/register"
        element={
          <RegisterScreen registrarUsuario={registrarUsuario}></RegisterScreen>
        }
      />
      <Route path="logged" element={<LoggedScreen></LoggedScreen>} />
    </Routes>
  );
}
