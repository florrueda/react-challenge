import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Listado from "./Components/Listado";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import './Css/bootstrap.min.css'
import './Css/App.css'
import Detalle from "./Components/Detalle";
import Resultados from "./Components/Resultados";
import Favoritos from "./Components/Favoritos";
import { useEffect, useState } from "react";

function App() {
  const [favs, setFavs] = useState([]);

    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs')
        
        if(favsInLocal != null) {
            const favsArray= JSON.parse(favsInLocal)
            setFavs(favsArray)
            }
    }, []);

  const addOrRemoveFromFavs = (e) => {

    const favMovies = localStorage.getItem('favs');

    let tempMoviesInFavs;

    if(favMovies === null) {
      tempMoviesInFavs = []
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgUrl = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('.card-title').innerText
    const overview = parent.querySelector('.card-text').innerText
    
    const movieFav = {
      imgUrl, title, overview,
      id: btn.dataset['movieId']
    }

    let movieIsInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieFav.id
    })

    if(!movieIsInArray) {
      tempMoviesInFavs.push(movieFav)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))
      setFavs(tempMoviesInFavs)
      console.log('se agrego');
    } else {
      let moviesLeft = tempMoviesInFavs.filter (onemovie => {
        return onemovie.id !== movieFav.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      setFavs(moviesLeft)
      console.log('se elimino');
    }

  }

  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Header favs={favs} />}>
          <Route element={<Footer />}>
            <Route path="/listado" element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
            <Route path="/movie-detail/:id" element={<Detalle  />} />
            <Route path="/resultados/:keyword" element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
            <Route path="/favoritos" element={<Favoritos addOrRemoveFromFavs={addOrRemoveFromFavs} favs={favs} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
