import React from "react";
import Button from "../Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import "./LoginForm.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Debe tener formato email")
    .required("El email es obligatorio"),
  password: Yup.string()
    .matches(/[A-Z]/, "Al menos una mayúscula")
    .matches(/[a-z]/, "Al menos una minúscula")
    .matches(/\d/, "Al menos un número")
    .required("El password es obligatorio"),
});

export default function Login({ loginUsuario }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (formulario) => {
      try {
        loginUsuario(formulario);
        Swal.fire({
          title: "Exito",
          text: "Ingreso exitoso",
          icon: "success",
          draggable: true,
        }).then(() => {
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
      <h2 className="form__titulo">Login</h2>
      <p className="form__subtitulo">
        Ingresa tus credenciales para seguir disfrutando de la experiencia
      </p>
      <div className="form__campos">
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
