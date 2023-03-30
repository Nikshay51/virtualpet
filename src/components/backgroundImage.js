//   className="tamagotchi-screen"
// style={{ backgroundImage: `url(${backgroundImage})` }}

import "../App.css";
import React, { useState, useEffect } from "react";
import "./background.css";

import Daybg from "../images/Daybg.png";
import Nightbg from "../images/Nightbg.webp";

const BackgroundImage = ({ backgroundState, healthState, children }) => {
  const [backgroundImage, setBackgroundImage] = useState(Daybg);

  useEffect(() => {
    if (healthState <= 40) {
      setBackgroundImage(Nightbg);
    }
    if (healthState >= 80) {
      setBackgroundImage(Daybg);
    }
  }, [backgroundState, healthState]);

  return (
    <div
      className="tamagotchi-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
