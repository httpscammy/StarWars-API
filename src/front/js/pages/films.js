import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../components/Favorites.js';
import EntityCard from '../components/EntityCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function FilmsPage() {
  const {store, actions} = useContext(FavoritesContext);
  const [films, setFilms] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const filmsRes = await fetch('https://www.swapi.tech/api/films');
      const filmsData = await filmsRes.json();
      setFilms(filmsData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

return (
    <>
      <h1>Films</h1>
      {
        films && films.map(({uid, title, url}) => {
          return (
            <EntityCard key={uid} data={{uid, title, url, type:"films"}} />
          )
        })
      }
    </>
  )
}

export default FilmsPage