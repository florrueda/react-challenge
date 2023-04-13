import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../Css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "" || password === "") {
      Swal.fire('Los campos no pueden estar vacios')
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire('Debes escribir una direccion de correo valida')
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire('Credenciales invalidas')
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        Swal.fire("Perfecto, ya estas dentro");
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        navigate("/listado");
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-6 offset-3">
          <h2>Formulario de Login</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label d-block mt-2">Email: </label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
            <label className="form-label d-block mt-2">Contraseña: </label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="btn btn-success mt-2" type="submit">
              Submit
            </button>
          </form>
          <button type="button"  className="btn btn-success mt-2" 
									onClick={() => {
										sessionStorage.setItem('token', 'guest');
										navigate("/listado");
									}}>
										Login as guest
									</button>
        </div>
      </div>
    </>
  );
};

export default Login;
