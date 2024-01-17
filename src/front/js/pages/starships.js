import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../components/Favorites.js';
import EntityCard from '../components/EntityCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function StarshipsPage() {
  const {store, actions} = useContext(FavoritesContext);
  const [starships, setStarships] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const starshipsRes = await fetch('https://www.swapi.tech/api/starships');
      const starshipsData = await starshipsRes.json();
      setStarships(starshipsData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

return (
    <>
      <h1>Starships</h1>
      {
        starships.map(({ uid, name, url }) => {
            return(
              <EntityCard key={uid} data={{ uid, name, url, type:"starships" }} />
              )
            })
      }
    </>
  )
}

export default StarshipsPage