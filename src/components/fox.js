import "./fox.css";
import React, { useState, useEffect } from "react";
import SpeechBubble from "./speechBubble";
import Speeches from "./Speeches";

const Eating = (
  <>
    <SpeechBubble text="Thank you for feeding me. I really needed that" />
    <div className="eating"></div>
  </>
);
const happy = (
  <>
    <SpeechBubble text="Thank you for hugging me. I really needed that" />
    <div className="happy"></div>
  </>
);
const hungry = (
  <>
    <SpeechBubble text="Feed me!" />
    <div className="hungry"></div>
  </>
);
const dead = (
  <>
    <SpeechBubble text="RIP" />
    <div className="dead"></div>
  </>
);
const idle = <div className="idle"></div>

const sleeping = (
  <>
    <SpeechBubble text="I am exhausted! Let me sleep and unlock all my knowledge" />
    <div className="sleeping"></div>
  </>
);

const hatching = <div className="hatching"></div>;
const Fox = ({ foxState }) => {
  const [fox, setFox] = useState(null);
  useEffect(() => {
    const setFoxIdle = () => {
      setFox(hatching);
      setTimeout(() => {
        setFox(idle);
      }, 3000);
    };
    const InitFox = () => (
      <>
      <Speeches text1="Hi there, Click me to hatch! Give me a name below" />
      <div className="egg" onClick={setFoxIdle}></div>
      </>
    );
    switch (foxState) {
      case "init":
        setFox(<InitFox />);
        break;
      case "hatching":
        setFox(hatching);
        break;
      case "eating":
        setFox(Eating);
        break;
      case "happy":
        setFox(happy);
        break;
      case "hungry":
        setFox(hungry);
        break;
      case "dead":
        setFox(dead);
        break;
      case "sleeping":
        setFox(sleeping);
        break;
      case "idle":
        setFox(idle);
        break;
      default:
        setFox(idle);
    }
  }, [foxState]);
  return <div>{fox}</div>;
};
export default Fox;
