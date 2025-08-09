import React, { useState } from "react";
import AppRouter from "./routes/AppRouter";

const App = () => {
  // Es para imitar a una API
  const [usuarios, setUsuarios] = useState([]);

  const registrarUsuario = (usuario) => {
    console.log(usuarios);
    const yaEsta = usuarios.find(
      (usuarioEnLista) => usuarioEnLista.email === usuario.email
    );
    if (yaEsta) {
      const mensaje = "Ese mail ya se encuentra registrado";
      console.log(mensaje);
      throw new Error(mensaje);
    } else {
      // console.log("El usuario no esta en registrado");
      setUsuarios([...usuarios, usuario]);
      return usuario;
    }
  };

  const loginUsuario = (usuario) => {
    const yaEsta = usuarios.filter(
      (usuarioEnLista) => usuarioEnLista.email === usuario.email
    );
    console.log(yaEsta);
    if (yaEsta.length > 0) {
      const usuarioLista = yaEsta[0];
      if (usuarioLista.password === usuario.password) {
        return usuarioLista;
      } else {
        throw new Error("Credenciales incorrectas");
      }
    } else {
      throw new Error("Usuario no registrado");
    }
  };
  return (
    <AppRouter
      registrarUsuario={registrarUsuario}
      loginUsuario={loginUsuario}
    ></AppRouter>
  );
};

export default App;
