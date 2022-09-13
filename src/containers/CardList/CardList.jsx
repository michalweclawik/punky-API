import React from "react";
import Card from "../../components/Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const { beersArray } = props;

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
