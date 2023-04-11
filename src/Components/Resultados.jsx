import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from '@sweetalert/with-react'

const Resultados = (props) => {
  const { keyword } = useParams();
  const navigate = useNavigate();

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token === null) {
      navigate("/");
    }

    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=e149a0aae730cd799e3cb5d6613dc73e&language=en-US&page=1&include_adult=false&query=${keyword}`;
    axios.get(endpoint).then((res) => {
        const moviesArray = res.data.results;

        if(moviesArray.length === 0) {
            swal(
                <div>
                  <h1>Tu busqueda no arrojo resultados</h1>
                </div>
              )
        } 

        setMoviesResults(res.data.results);
    });
    },[keyword]);
    

  return (
    <div>
      <h2>Buscaste: {keyword}</h2>
      <div className="row">
      {
        moviesResults.map((movie) => {
          return (
            <div className="col-3" key={movie.id}>
              <div className="card" >
                <img src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} className="card-img-top" alt="..." />
                <button className="favourite-btn" onClick={props.addOrRemoveFromFavs} data-movie-id={movie.id}>🖤</button>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                  <Link to={`/movie-detail/${movie.id}`} className="btn btn-primary">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          )
          
        })}
      </div>
    </div>
  );
};

export default Resultados;
