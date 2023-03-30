import speech from "./speech.css";
import React, {useState,useEffect} from 'react';
import "./fox.css";
import Speeches from "./Speeches";

const SpeechBubble = ({ text, children }) => (
    <div className="speech-bubble-container">
     <div className="speech-bubble">
      {text}
     </div>
     {children}
     {/* <Speeches></Speeches> */}
    </div>
   );
export default SpeechBubble