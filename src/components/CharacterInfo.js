import React from "react";
import "../stylesheets/bigCard.scss";
import { Link } from "react-router-dom";

const CharacterInfo = (props) => {
  const getStatus = () => {
    if (props.character.status === "Alive") {
      return <span>Alive</span>;
    } else if (props.character.status === "Dead") {
      return <span>Dead</span>;
    } else {
      return <span>Unknown</span>;
    }
  };

  const getSpecies = () => {
    return props.character.species === "Human" ? (
      <span>Human</span>
    ) : (
      <span>Not Human</span>
    );
  };

  return (
    <div className="info">
      <div className="info_card">
        <Link to="/">
          <button className="button" title="Go back">
            Take me back!
          </button>
        </Link>
        <div className="big_card">
          <div>
            <img
              className="big_card_image"
              src={props.character.image}
              alt={`${props.character.name}`}
              title={`${props.character.name}`}
            />
          </div>
          <div>
            <ul className="big_card_list">
              <li className="big_card_name"> {props.character.name}</li>
              <li className="big_card_info">Status: {getStatus()}</li>
              <li className="big_card_info">Species: {getSpecies()}</li>
              <li className="big_card_info">
                Planet of origen: {props.character.origin}
              </li>
              <li className="big_card_info">
                Number of appearances: {props.character.episode}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
