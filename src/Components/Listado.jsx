import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Css/bootstrap.min.css";
import axios from "axios";
import Swal from "sweetalert2";

const Listado = (props) => {
  const navigate = useNavigate();

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token === null) {
      navigate("/");
    }

    const endpoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=e149a0aae730cd799e3cb5d6613dc73e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios
      .get(endpoint)
      .then((res) => {
        const apiData = res.data.results;
        setMoviesList(apiData);
      })
      .catch((err) => {
        Swal.fire("Hubo un error intenta nuevamente", "", "error");
      });
  }, [navigate, setMoviesList]);

  return (
    <div>
      <div className="row">
        {moviesList.map((movie) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-10 " key={movie.id}>
              <div className="card my-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                  className="card-img-top"
                  alt="..."
                />
                <button
                  className="favourite-btn"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={movie.id}
                >
                  🖤
                </button>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview.substring(0,150)}...</p>
                  <div className="card-footer">
                    <Link
                      to={`/movie-detail/${movie.id}`}
                      className="btn btn-primary"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listado;
