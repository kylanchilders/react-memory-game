import React from "react";
import "./style.css";

const CharacterCard = props => (
    <div className="card" onClick={() => props.selectedCard(props.id)} >
      <div className="img-container">
        <img
          src={image}
          alt={id}
        />
      </div>
    </div>
  );


export default CharacterCard;
