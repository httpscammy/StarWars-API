import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FavoritesContext } from './Favorites.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function FavDropdown() {
  const { store, actions } = useContext(FavoritesContext);

  const handleRemove = (uid) => {
    actions.removeFavorites(uid); 
  };

  return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Favorites 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {
              store.favorites.map( ({uid, name}) => {
                  return (
                    <Dropdown.Item key={uid}>
                      <div style={{padding: '7px', display: 'inline-block'}}>
                        {name}
                      </div>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="trash-can"
                        style={{ cursor: 'pointer'}}
                        onClick={() => handleRemove(uid)}
                      />
                    </Dropdown.Item>
                  )})
          }
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default FavDropdown;