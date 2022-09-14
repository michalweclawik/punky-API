import React from "react";
import Card from "../../components/Card/Card";
import "./CardList.scss";
import { Link } from "react-router-dom";

const CardList = (props) => {
  const { beersArray } = props;

  return (
    <div className="cardList">
      {beersArray.map((beer) => {
        return (
          <Link
            to={`/card/${beer.id}`}
            className="cardList__beerCard"
            key={beer.id}
          >
            <Card beer={beer} />
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
