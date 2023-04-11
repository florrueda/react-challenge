import React from "react";
import axios from "axios";
import swal from '@sweetalert/with-react'
import { useNavigate } from "react-router-dom";
import '../Css/bootstrap.min.css'

const Login = () => {

  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if(email === "" || password === "") {
            swal(
                <div>
                  <h1>Los campos no pueden estar vacios</h1>
                </div>
              )
            return;
        }

        if(email !== "" && !regexEmail.test(email)) {
            swal(
                <div>
                  <h1>Debes escribir una direccion de correo valida</h1>
                </div>
              )
        }

        if(email !== 'challenge@alkemy.org' || password !=='react'){
            swal(
                <div>
                  <h1>Credenciales invalidas</h1>
                </div>
              )
            return;
        }

        axios.post('http://challenge-react.alkemy.org', {email, password})
            .then(res => {
                swal(
                    <div>
                      <h1>Perfecto, ya estas dentro</h1>
                    </div>
                  )
                const token = res.data.token;
                sessionStorage.setItem('token', token)
                navigate('/listado')
            })

    }


  return (
    <>
    <div className="row">
    <div className="col-6 offset-3">
    <h2>Formulario de Login</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label d-block mt-2">Email: </label>
        <input className="form-control" type="email" name="email" placeholder="Email" />
        <label className="form-label d-block mt-2">Contraseña: </label>
        <input className="form-control" type="password" name="password" placeholder="Password" />
        <button className="btn btn-success mt-2" type="submit">Submit</button>
      </form>
    </div>
      
    </div>
    </>
  );
};

export default Login;
