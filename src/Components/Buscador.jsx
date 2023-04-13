import React from "react";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Buscador = () => {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if(keyword.length < 4) {
          Swal.fire(
            'Tienes que escribir una palabra','',
            'error'
          )
        } else {
          e.currentTarget.keyword.value = '';
          navigate(`/resultados/${keyword}`)
        }

    }

  return (
    <div className="d-flex align-items-center">
      <form onSubmit={submitHandler}>
        <label className="form-label mb-0 mx-2 ">
        <input
          className="form-control"
          type="text"
          name="keyword"
          placeholder="Escribe una palabra"
        />
        </label>
        <button className="btn btn-success ml-2" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Buscador;
