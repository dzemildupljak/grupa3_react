import React from "react";
import Card from "../card/Card";
import "./CardList.css";

const CardList = ({ listFacts }) => {
  return (
    <div className="card_list">
      {listFacts.map((el, index) => (
        <Card text={el.fact} key={index} />
      ))}
    </div>
  );
};

export default CardList;
