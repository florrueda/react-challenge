import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Css/bootstrap.min.css";
import axios from "axios";

const Detalle = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token === null) {
      navigate("/");
    }

    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=e149a0aae730cd799e3cb5d6613dc73e&language=en-US`;
    axios.get(endpoint).then((res) =>{ setMovie(res.data)});
  }, [navigate, id]);

  return (
    <div className="">
      {movie ? (
        <div>
          <h3>{movie.title}</h3>
          <div className="row">
            <div className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                className="card-img-top"
                alt="..."
              />
            </div>

            <div className="col-8">
                <h5>Fecha de estreno: {movie.release_date}</h5>
                <h5>Descripcion</h5>
                <p>{movie.overview}</p>
                <h5>Generos</h5>
                {
                    movie.genres?.map((genre, index) => <li key={index}>{genre.name}</li>)
                }
            </div>
          </div>
        </div>
      ) : (
        <h3>Cargando el detalle</h3>
      )}
    </div>
  );
};

export default Detalle;
