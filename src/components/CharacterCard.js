import React from "react";
import "../stylesheets/smallCards.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div className="small_card">
      <li>
        <Link to={`${props.character.id}`} className="card__link">
          <img
            className="card_image"
            src={props.character.image}
            alt={`${props.character.name}`}
            title={`${props.character.name}`}
          />
          <p className="small_card_name"> {props.character.name}</p>
          <p className="small_card_species">{props.character.species}</p>
        </Link>
      </li>
    </div>
  );
};

export default CharacterCard;
