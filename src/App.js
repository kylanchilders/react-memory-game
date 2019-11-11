import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import data from "./images.json";

var goodGuessCount = 0;

class App extends Component {

  state = {
    goodGuessCount,
    Selected
  };

  selectedCard = id => {
    
    const Selected = this.state.Selected;
    const SelectedMatch = Selected.filter(Selected => Selected.id === id);

    if(SelectedMatch[0].clicked){
      goodGuessCount = 0;

      for (i=0; i < Selected.length; i++){
        Selected[i].clicked = false;
      }
    
    this.setState({ goodGuessCount });
    this.setState({ Selected });

    }else if (goodGuessCount < 15){

      SelectedMatch[0].clicked = true;
      goodGuessCount++

      Selected.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ Selected });
      this.setState({ goodGuessCount });
    }else{

      selectedMatch[0].clicked = true;
      correctGuesses = 0;

      for (i=0; i < Selected.length; i++){
        Selected[i].clicked = false;
      }
    }
  }

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
