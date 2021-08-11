import React from "react";
import "./Card.css";

const Card = ({ id = "default", winner, label, ...props }) => {
  const winnerClass = "winner_class";
  const getIcon = (label) => {
    return label === "CROSS" ? "❌" : "🔴";
  };
  return (
    <>
      <div
        className={`card_container ${winner.includes(id) ? winnerClass : ""}`}
        {...props}
      >
        {label === "NEUTRAL" ? "" : getIcon(label)}
      </div>
    </>
  );
};

export default Card;
