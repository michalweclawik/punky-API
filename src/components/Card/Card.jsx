import React from "react";
import "./Card.scss";

const beerCard = ({ beer }) => {
  return (
    <div className="beerCard">
      <img className="beerCard__img" src={beer.image_url} alt={beer.name} />
      <div className="beerCard__heading">
        <p className="beerCard__name">{beer.name}</p>
        <p className="beerCard__tagline">{beer.tagline}</p>
      </div>
      <div className="beerCard__figures">
        <dl className="beerCard__figure">
          <dt className="beerCard__figure-label">ABV</dt>
          <dd className="beerCard__figure-value">{beer.abv}</dd>
        </dl>
        <dl className="beerCard__figure">
          <dt className="beerCard__figure-label">IBU</dt>
          <dd className="beerCard__figure-value">{beer.ibu}</dd>
        </dl>
        <dl className="beerCard__figure">
          <dt className="beerCard__figure-label">EBC</dt>
          <dd className="beerCard__figure-value">{beer.ebc}</dd>
        </dl>
        <dl className="beerCard__figure">
          <dt className="beerCard__figure-label">PH</dt>
          <dd className="beerCard__figure-value">{beer.ph}</dd>
        </dl>
      </div>
      <div className="beerCard__description">
        <p>{beer.description}</p>
      </div>
      <ul className="beerCard__list">
        <li className="beerCard__list-header">Food Pairings</li>
        {beer.food_pairing.map((pairing) => (
          <li className="beerCard__list-content">{pairing}</li>
        ))}
      </ul>
    </div>
  );
};
export default beerCard;
