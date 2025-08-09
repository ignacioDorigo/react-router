import React from "react";
import styled from "styled-components";

const Boton = styled.button`
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  color: palevioletred;
  border: 2px solid palevioletred;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: palevioletred;
    color: #ffffff;
  }
`;

export default function Button(props) {
  return <Boton {...props}>{props.children}</Boton>;
}
