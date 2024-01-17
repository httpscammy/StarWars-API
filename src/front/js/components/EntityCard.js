import React from "react";
import { Button } from "react-bootstrap/";
import { useContext } from "react";
import { Card } from "react-bootstrap/";
import { FavoritesContext } from "./Favorites.js";
import { Link } from "react-router-dom"

function EntityCard({ data }) {
  const { store, actions } = useContext(FavoritesContext);

  return (
    <Card style={{ width: "18rem", margin: "30px" }}>
      <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/${data.type}/${data.uid}.jpg`}
        onError={(e) => {
          e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
      /> 
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/learnmore" state={{type: data.type, index: data.uid}}>
        <Button
          variant="primary"
          style={{ margin: "5px" }}
        >
          Learn More!
        </Button>
        </Link>
        <Button variant="primary" onClick={() => actions.addFavorites(data)}>
          Favorite
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EntityCard;
