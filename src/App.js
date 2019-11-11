import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import Selected from "./images.json";

var goodGuessCount = 0;

class App extends Component {

  state = {
    goodGuessCount,
    Selected
  };

  selectedCard = id => {
    
    const Selected = this.state.Selected;
    const selectedMatch = Selected.filter(Select => Select.id === id);

    if(selectedMatch[0].clicked){
      goodGuessCount = 0;

      for (let i=0; i < Selected.length; i++){
        Selected[i].clicked = false;
      }
    
    this.setState({ goodGuessCount });
    this.setState({ Selected });

    }else if (goodGuessCount < 15){

      selectedMatch[0].clicked = true;
      goodGuessCount++

      Selected.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ Selected });
      this.setState({ goodGuessCount });
    }else{

      selectedMatch[0].clicked = true;
      goodGuessCount = 0;

      for (let i=0; i < Selected.length; i++){
        Selected[i].clicked = false;
      }
    }
  }

render() {
  return (
    <Wrapper>
      <Title>Memory Match Game</Title>
      <h3>
          Correct Guesses: {this.state.goodGuessCount}
      </h3>
      <br></br>
      {this.state.Selected.map(Select => (
              <CharacterCard
                selectedCard={this.selectedCard}
                id={Select.id}
                key={Select.id}
                image={Select.image}
              />
            ))}
    </Wrapper>
  );
}
}

export default App;
