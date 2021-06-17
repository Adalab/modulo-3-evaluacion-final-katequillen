import React from "react";
import { Link } from "react-router-dom";

const CharacterInfo = (props) => {
  const getStatus = () => {
    if (props.character.status === "Alive") {
      return <div>Alive</div>;
    } else if (props.character.status === "Dead") {
      return <div>Dead</div>;
    } else {
      return <div>Unknown</div>;
    }
  };

  const getSpecies = () => {
    return props.character.species === "Human" ? (
      <div>Human</div>
    ) : (
      <div>Not Human</div>
    );
  };

  return (
    <div className="detail">
      <div className="detail__card">
        <Link to="/">
          <button className="button" title="Go back">
            Take me back!
          </button>
        </Link>
        <div className="detail__data">
          <div>
            <img
              className="card_image"
              src={props.character.image}
              alt={`${props.character.name}`}
              title={`${props.character.name}`}
            />
          </div>
          <div className="detail_container">
            <ul className="detail_list">
              <li className="detail_info"> {props.character.name}</li>
              <li className="detail_info">Status: {getStatus()}</li>
              <li className="detail_info">Species: {getSpecies()}</li>
              <li className="detail_info">
                Planet of origen: {props.character.origin}
              </li>
              <li className="detail_info">
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
