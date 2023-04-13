import React from "react";

// The input should be reset to an empty string.
// The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.
// The input should have a minimum and maximum length of 5.

function GuessInput({guess, setGuess}) {
  return  <>
    <input 
      id="guess-input" 
      type="text"
      value={guess}
      onChange={event => {
        setGuess(event.target.value)
      }}
      pattern="[A-Za-z]{5}"
      title="5 letter word"
     />
  </>
}

export default GuessInput;
