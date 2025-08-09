import React, { createContext, useState } from "react";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const login = (usuario) => {
    setUsuario(usuario);
  };

  const logout = () => {
    setUsuario(null);
  };
  
  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContext, UsuarioProvider };
