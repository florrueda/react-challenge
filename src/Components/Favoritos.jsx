import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Favoritos = (props) => {
    const navigate = useNavigate();

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token === null) {
      navigate("/");
    }})

    return (
        <div className="">
      <div className="row">
      {
        !props.favs.length && <dic className='col-12 text-danger'>No tenes favoritos</dic>
      }
      {
        props.favs.map((favs) => {
          return (
            <div className="col-3" key={favs.id}>
              <div className="card my-4" >
                <img src={favs.imgUrl} className="card-img-top" alt="..." />
                <button className="favourite-btn" onClick={props.addOrRemoveFromFavs} data-movie-id={favs.id}>🖤</button>
                <div className="card-body">
                  <h5 className="card-title">{favs.title}</h5>
                  <p className="card-text">{favs.overview.substring(0,150)}...</p>
                  <Link to={`/movie-detail/${favs.id}`} className="btn btn-primary">
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
}

export default Favoritos;
