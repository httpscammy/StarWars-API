import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../components/Favorites.js';
import EntityCard from '../components/EntityCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function PeoplePage() {
//   const {store, actions} = useContext(FavoritesContext);
  const [people, setPeople] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const peopleRes = await fetch('https://www.swapi.tech/api/people');
      const peopleData = await peopleRes.json();
      setPeople(peopleData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

return (
    <>
      <h1>People</h1>
      {
        people.map(({uid, name, url}) => {
          return (
            <EntityCard key={uid} data={{uid, name, url, type:"characters"}} />
          )
        })
      }
    </>
  )
}

export default PeoplePage