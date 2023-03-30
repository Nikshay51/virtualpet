import "./App.css";
//import Tamagotchi from "./components/tamagotchi";
import Fox from "./components/fox";
import FeedButton from "./components/buttons/feedButton";
import React, { useState, useEffect } from "react";
import SleepButton from "./components/buttons/sleepButton";
import HugButton from "./components/buttons/hugButton";
import Daybg from "./images/Daybg.png";
//import Nightbg from "./images/Nightbg.webp";
import BackgroundImage from "./components/backgroundImage";

const App = () => {
  const [fox, setFox] = useState("init");
  const MAX_SLEEPINESS = 100;
  const MAX_HAPPINESS = 100;
  const MAX_HUNGER = 100;
  const MAX_HEALTH = 100;

  const [health, setHealth] = useState(MAX_HEALTH);
  const [hunger, setHunger] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [sleepiness, setSleepiness] = useState(MAX_SLEEPINESS);
  const [happiness, setHappiness] = useState(MAX_HAPPINESS);
  const [backgroundImage, setBackgroundImage] = useState(Daybg);

  useEffect(() => {
    const interval = setInterval(() => {
      if (fox !== "init") {
        setSleepiness((prevSleepiness) => Math.max(prevSleepiness - 1, 0));
        setHappiness((prevHappiness) => Math.max(prevHappiness - 1, 0));
        setHunger((prevHunger) => Math.min(prevHunger + 2, MAX_HUNGER));

        //console.log(isActive);
        if (hunger >= 70) {
          if (isActive === true) {
            setFox("hungry");
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [fox, sleepiness, hunger, isActive]);

  useEffect(() => {
    const healthInterval = setInterval(() => {
      setHealth((prevHealth) => {
        let newHealth = prevHealth;

        if (sleepiness <= 10) {
          newHealth = Math.max(newHealth - 1, 0);
        }

        if (hunger >= 90) {
          newHealth = Math.max(newHealth - 1, 0);
        }

        if (happiness <= 10) {
          newHealth = Math.max(newHealth - 1, 0);
        }

        if (sleepiness >= 80 || hunger <= 20 || happiness >= 80) {
          newHealth = Math.min(prevHealth + 1, 100);
        }

        if (newHealth <= 0) {
          setFox("dead");
          setIsActive(() => false);
        }

        return newHealth;
      });
    }, 1000);

    return () => clearInterval(healthInterval);
  }, [health, sleepiness, hunger, happiness]);

  return (
    <div>
      <BackgroundImage
        backgroundState={backgroundImage}
        healthState={sleepiness}
      >
        <div className="tamagotchi">
          <Fox foxState={fox} setFoxState={setFox} />
        </div>
        <div className="actions">
          <FeedButton
            isActive={isActive}
            setIsActive={setIsActive}
            setFoxState={setFox}
            setHunger={setHunger}
          />
          <SleepButton
            isActive={isActive}
            setHunger={setHunger}
            healthState={sleepiness}
            setIsActive={setIsActive}
            setBackgroundImage={setBackgroundImage}
            setFoxState={setFox}
            setSleepiness={setSleepiness}
            setHappiness={setHappiness}
          />
          <HugButton
            isActive={isActive}
            setIsActive={setIsActive}
            setFoxState={setFox}
            setSleepiness={setSleepiness}
            setHappiness={setHappiness}
          />
        </div>
        <div className="stats">
          <p>Health: {health}</p>
          <p>Tiredness: {sleepiness}</p>
          <p>Happiness: {happiness}</p>
          <p>Hunger: {hunger}</p>
        </div>
      </BackgroundImage>
    </div>
  );
};
export default App;
