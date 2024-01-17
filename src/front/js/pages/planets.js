import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../components/Favorites.js';
import EntityCard from '../components/EntityCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function PlanetsPage() {
  const {store, actions} = useContext(FavoritesContext);
  const [planets, setPlanets] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const planetsRes = await fetch('https://www.swapi.tech/api/planets');
      const planetsData = await planetsRes.json();
      setPlanets(planetsData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

return (
    <>
      <h1>Planets</h1>
      {
        planets.map(({ uid, name, url }) => {
            return(
              <EntityCard key={uid} data={{ uid, name, url, type:"planets" }} />
              )
            })
      }
    </>
  )
}

export default PlanetsPage