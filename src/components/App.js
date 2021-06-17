import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import logo from "../images/RM_logo.png";
import CharacterList from "./CharacterList.js";
import ApiData from "../services/Api.js";
import CharacterInfo from "./CharacterInfo.js";
import Filters from "./Filters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    ApiData().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    }
  };

  const filterCharacter = characters.filter((character) => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find(
      (character) => character.id === characterId
    );
    if (foundCharacter !== undefined) {
      return <CharacterInfo character={foundCharacter} />;
    }
  };

  return (
    <div className="app">
      <img src={logo} alt="logo" className="logo" />
      <main>
        <Switch>
          <Route exact path="/">
            <Filters handleFilter={handleFilter} nameFilter={nameFilter} />
            <CharacterList characters={filterCharacter} />
          </Route>
          <Route path="/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
