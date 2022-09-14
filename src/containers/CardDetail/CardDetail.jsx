import React from "react";
import { useParams } from "react-router";
import "./CardDetail.scss";

const CardDetail = ({ beersArr }) => {
  const { beerId } = useParams();

  const beerToDisplay = beersArr.find((beer) => beer.id === Number(beerId));

  console.log(beerToDisplay);
  return (
    <div className="beerCard2">
      <img
        className="beerCard__img"
        src={beerToDisplay.image_url}
        alt={beerToDisplay.name}
      />
      <div className="beerCard__heading">
        <p className="beerCard__name">{beerToDisplay.name}</p>
        <p className="beerCard__tagline">{beerToDisplay.tagline}</p>
      </div>
      <div className="beerCard__figures">
        <div className="beerCard__figure">
          <p className="beerCard__figure-label">ABV</p>
          <p className="beerCard__figure-value">{beerToDisplay.abv}</p>
        </div>
        <div className="beerCard__figure">
          <p className="beerCard__figure-label">IBU</p>
          <p className="beerCard__figure-value">{beerToDisplay.ibu}</p>
        </div>
        <div className="beerCard__figure">
          <p className="beerCard__figure-label">EBC</p>
          <p className="beerCard__figure-value">{beerToDisplay.ebc}</p>
        </div>
        <div className="beerCard__figure">
          <p className="beerCard__figure-label">PH</p>
          <p className="beerCard__figure-value">{beerToDisplay.ph}</p>
        </div>
      </div>
      <p className="beerCard__info">{beerToDisplay.description}</p>
      <ul className="beerCard__list">
        <li className="beerCard__list-header">Food Pairings</li>
        {beerToDisplay.food_pairing.map((pairing, index) => (
          <li className="beerCard__list-content" key={index}>
            {pairing}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDetail;
