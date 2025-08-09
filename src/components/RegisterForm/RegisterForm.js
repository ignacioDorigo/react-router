import React, { useContext } from "react";
import "./RegisterForm.css";
import Button from "../Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { UsuarioContext } from "../../context/UsuarioContext";

const initialValues = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
};

const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .matches(soloLetras, "Solo letras")
    .required("El nombre es obligatorio"),
  apellido: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .matches(soloLetras, "Solo letras")
    .required("El apellido es obligatorio"),

  email: Yup.string()
    .email("Debe tener formato email")
    .required("El email es obligatorio"),
  password: Yup.string()
    .matches(/[A-Z]/, "Al menos una mayúscula")
    .matches(/[a-z]/, "Al menos una minúscula")
    .matches(/\d/, "Al menos un número")
    .required("El password es obligatorio"),
});

export default function RegisterForm({ registrarUsuario }) {
  const navigate = useNavigate();
  const { login } = useContext(UsuarioContext);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (formulario) => {
      try {
        const user = registrarUsuario(formulario);
        console.log(user);
        Swal.fire({
          title: "Exito",
          text: "Registro exitoso",
          icon: "success",
          draggable: true,
        }).then(() => {
          login(user);
          navigate("/logged");
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error",
          text: `${error.message}`,
          icon: "error",
          draggable: true,
        });
      }
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2 className="form__titulo">Register</h2>
      <p className="form__subtitulo">
        Registrate para vivir la experiencia completa
      </p>
      <div className="form__campos">
        <div className="form__campo">
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            id="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            placeholder="Nombre"
            onBlur={formik.handleBlur}
            type="text"
          ></input>
          {formik.errors.nombre && formik.touched.nombre && (
            <div className="form__errores">{formik.errors.nombre}</div>
          )}
        </div>
        <div className="form__campo">
          <label className="form__label" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="form__input"
            id="apellido"
            value={formik.values.apellido}
            onChange={formik.handleChange}
            placeholder="Apellido"
            onBlur={formik.handleBlur}
            name="apellido"
            type="text"
          ></input>
          {formik.errors.apellido && formik.touched.apellido && (
            <div className="form__errores">{formik.errors.apellido}</div>
          )}
        </div>
        <div className="form__campo">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            onBlur={formik.handleBlur}
            name="email"
            type="email"
          ></input>
          {formik.errors.email && formik.touched.email && (
            <div className="form__errores">{formik.errors.email}</div>
          )}
        </div>
        <div className="form__campo">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            onBlur={formik.handleBlur}
            type="password"
            autoComplete="new-password"
          ></input>
          {formik.errors.password && formik.touched.password && (
            <div className="form__errores">{formik.errors.password}</div>
          )}
        </div>
      </div>
      <Button type="submit" className="form__button">
        Registrar
      </Button>
    </form>
  );
}
