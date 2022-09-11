import React from "react";
import "./Main.scss";
import CardList from "../../containers/CardList/CardList";

const Main = ({ beersArr }) => {
  return (
    <div className="main">
      <div className="main__heading">Drink responsibly!!</div>
      <div className="main__cardlist">
        <CardList beersArray={beersArr} />
      </div>
    </div>
  );
};

export default Main;
