import React from "react";
import CharacterCard from "./CharacterCard.js";

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <div>
        <div>
          <h2>Oh no!</h2>
          <h3>Unable to find a character with that name. Please try again.</h3>
        </div>
      </div>
    );
  } else {
    const characterInfo = props.characters.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    });
    return (
      <section className="card_section">
        <ul className="card_list">{characterInfo}</ul>
      </section>
    );
  }
};

export default CharacterList;
