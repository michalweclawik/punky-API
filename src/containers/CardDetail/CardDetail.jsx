import React from "react";
import { useParams } from "react-router";

const CardDetail = (props) => {
  const { beerArray } = props;
  const { beerId } = useParams();

  const beer = beerArray.find((beer) => beer.id === beerId);

  return (
    <div className="beerCard">
      <img className="beerCard__img" src={beer.image_url} alt={beer.name} />
      <div className="beerCard__heading">
        <p className="beerCard__name">{beer.name}</p>
        <p className="beerCard__tagline">{beer.tagline}</p>
      </div>
      <div className="beerCard__figures">
        <div className="beerCard__figure">
          <p className="beerCard__figure-label">ABV</p>
          <p className="beerCard__figure-value">{beer.abv}</p>
        </div>
        <div className="beerCard__figure">
          <p className="beerCard__figure-label">IBU</p>
          <p className="beerCard__figure-value">{beer.ibu}</p>
        </div>
        <div className="beerCard__figure">
          <p className="beerCard__figure-label">EBC</p>
          <p className="beerCard__figure-value">{beer.ebc}</p>
        </div>
        <div className="beerCard__figure">
          <p className="beerCard__figure-label">PH</p>
          <p className="beerCard__figure-value">{beer.ph}</p>
        </div>
      </div>
      <ul className="beerCard__list">
        <li className="beerCard__list-header">Food Pairings</li>
        {beer.food_pairing.map((pairing, index) => (
          <li className="beerCard__list-content" key={index}>
            {pairing}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDetail;
