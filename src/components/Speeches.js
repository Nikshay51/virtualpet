import React, { useState } from 'react';
import './speeches.css';

function Speeches({ text1, children1 }) {
    const [inputText, setInputText] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleButtonClick = () => {
      console.log('User input:', inputText);
      setSubmitted(true);
    };
    
    return (
      <div>
        {!submitted && (
          <div className="speech-bubble2">
            {text1}
            <div className="input-wrapper">
            {children1}
              <textarea 
                className="speech-bubble__input"
                value={inputText}
                onChange={handleInputChange}
              />
              <button onClick={handleButtonClick}>Submit</button> 
            </div>
            <div className="speech-bubble__arrow"></div>
          </div>
        )}
        {submitted && <div className="text-display">{inputText}</div>}
      </div>
    );
  }
  
  export default Speeches;
