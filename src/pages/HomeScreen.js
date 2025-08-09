import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../components/Button/Button";

const Formulario = styled.div`
  background-color: #9b9b9bff;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 20rem;
  border-radius: 3px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);
  border-top: 10px solid palevioletred;
  @media (width>764px) {
    width: 50%;
  }
`;

const Titulo = styled.h1`
  text-align: center;
  margin: 2rem;
  font-size: 3rem;
  color: #f4f4f4ff;
`;

const ContenedorBotones = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;

  @media (width>768px) {
    flex-direction: row;
  }
`;

// const Boton = styled.button`
//   width: 100%;
//   padding: 1rem;
//   cursor: pointer;
//   border-radius: 5px;
//   font-weight: bold;
//   color: palevioletred;
//   border: 2px solid palevioletred;
//   background-color: #ffffff;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background-color: palevioletred;
//     color: #ffffff;
//   }
// `;

export default function HomeScreen() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <Formulario>
        <Titulo>Seleccione una opción</Titulo>
        <ContenedorBotones>
          <Button onClick={goToLogin}>Ya tengo cuenta</Button>
          <Button onClick={goToRegister}>Crear Cuenta</Button>
        </ContenedorBotones>
      </Formulario>
    </div>
  );
}
