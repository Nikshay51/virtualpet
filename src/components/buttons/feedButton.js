import React from "react";
import "./buttons.css";

const FeedButton = ({ isActive, setIsActive, setFoxState, setHunger }) => {
  const handleFeedClick = () => {
    setIsActive(() => false);
    setFoxState("eating");
    setHunger((prevHunger) => {
      prevHunger = prevHunger - 25;
      if (prevHunger < 0) {
        prevHunger = 0;
      }
      return prevHunger;
    });

    setIsActive(() => false);
    setTimeout(() => {
      setIsActive(() => true);
      setFoxState("idle");
    }, 3000);
  };

  return (
    <button
      className={isActive ? "activeButton" : "inactiveButton"}
      disabled={!isActive}
      onClick={handleFeedClick}
    >
      Feed
    </button>
  );
};
export default FeedButton;
