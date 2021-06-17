import React from "react";

import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <li className="small_card">
      <Link to={`${props.character.id}`} className="card__link">
        <img
          className="card_image"
          src={props.character.image}
          alt={`${props.character.name}`}
          title={`${props.character.name}`}
        />
        <p className="small_card_name">Name: {props.character.name}</p>
        <p className="small_card_species">Species: {props.character.species}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
