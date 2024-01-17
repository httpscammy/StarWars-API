import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../components/Favorites.js';
import EntityCard from '../components/EntityCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function SpeciesPage() {
  const {store, actions} = useContext(FavoritesContext);
  const [species, setSpecies] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const speciesRes = await fetch('https://www.swapi.tech/api/species');
      const speciesData = await speciesRes.json();
      setSpecies(speciesData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

return (
    <>
      <h1>Species</h1>
      {
        species.map(({ uid, name, url }) => {
            return(
              <EntityCard key={uid} data={{ uid, name, url, type:"species" }} />
              )
            })
      }
    </>
  )
}

export default SpeciesPage