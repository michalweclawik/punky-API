import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const { beersArray } = props;

  // const cardJSX=beersArray.map(beer=>)
  return (
    <div className="cardList">
      {beersArray.map((beer) => {
        return (
          <div className="cardList__beerCard" key={beer.id}>
            <Card beer={beer} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
