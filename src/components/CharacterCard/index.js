import React from "react";
import "./style.css";

const CharacterCard = props => (
    <div className="card" onClick={() => props.selectedCard(props.id)} >
      <div className="img-container">
        <img
          src={props.image}
          alt={props.id}
        />
      </div>
    </div>
  );


export default CharacterCard;
