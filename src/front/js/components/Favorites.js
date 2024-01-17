import React, { useState } from 'react';

export const FavoritesContext = React.createContext(null);

export const FavoritesWrapper = (props) => {
	const [ store, setStore ] = useState({
		favorites: []
	});
	const [ actions, setActions ] = useState({
		addFavorites: (entity) => {
			setStore(({favorites}) => { 
				const match = favorites.find((fav) => fav.uid === entity.uid)
				if (!match) {
					return {
						favorites: [...favorites, entity] 
					} 
				}
				return {favorites}
			})
		},
		removeFavorites: (uid) => {
			setStore(({ favorites }) => ({
			  favorites: favorites.filter((fav) => fav.uid !== uid),
			}));
		  },
	});
	
	return (
		<FavoritesContext.Provider value={{ store, actions }}>
			{props.children}
		</FavoritesContext.Provider>
	);
}