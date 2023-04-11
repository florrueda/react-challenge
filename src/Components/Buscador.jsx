import React from "react";
import swal from '@sweetalert/with-react'
import { useNavigate } from "react-router-dom";

const Buscador = () => {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if(keyword.length < 4) {
            swal(
                <div>
                  <h1>Tienes que escribir una palabra</h1>
                </div>
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
