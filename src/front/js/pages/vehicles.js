import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../components/Favorites.js';
import EntityCard from '../components/EntityCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function VehiclesPage() {
  const {store, actions} = useContext(FavoritesContext);
  const [vehicles, setVehicles] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const vehiclesRes = await fetch('https://www.swapi.tech/api/vehicles');
      const vehiclesData = await vehiclesRes.json();
      setVehicles(vehiclesData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

return (
    <>
      <h1>Vehicles</h1>
      {
        vehicles.map(({ uid, name, url }) => {
            return(
              <EntityCard key={uid} data={{ uid, name, url, type:"vehicles" }} />
              )
            })
      }
    </>
  )
}

export default VehiclesPage