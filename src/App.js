import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import data from "./images.json";

var goodGuessCount = 0;

class App extends Component {

  state = {
    goodGuessCount
  };

render() {
  return (
    <Wrapper>
      <Title>Memory Match Game</Title>
      <div>
      <h3>
          Correct Guesses: {this.state.goodGuessCount}
      </h3>
      </div>
      {data.map(data => <CharacterCard data={data}/>)}
    </Wrapper>
  );
}
}

export default App;
