import React, { useState } from "react";
import "./TextForm.css";

// Author Hanna
function TextForm({ handleFormSubmit, newThought, setNewThought }) {
  const [count, setCount] = useState(0);
  const maxCharacter = 140;
  const minCharacter = 5;

  // function handle text area on input value, count the number of character
  const handleTextAreaChange = (event) => {
    const text = event.target.value;
    setNewThought(text);
    setCount(text.length);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit} className="text-form-container">
        <h2>What is making you happy right now? 😊</h2>
        <textarea
          className="text-form-input-area"
          value={newThought}
          onChange={handleTextAreaChange}
          placeholder="What makes you happy...."
        ></textarea>
        <div className="character-count-message">
          {/* when the input length less than minimum characters OR more than maximum characters, show the error message */}
          <div className="message">
            {newThought.length > 0 && newThought.length < minCharacter && (
              <p className="error-message">Your message is too short 😔</p>
            )}
            {newThought.length > maxCharacter && (
              <p className="error-message">Your message is too long 😔</p>
            )}
          </div>
          <div className="character-count">
            {count}/{maxCharacter}
          </div>
        </div>
        <div className="send-button-container">
          {/* When input length is not in the range, disable the sending button */}
          <button
            disabled={
              newThought.length < minCharacter ||
              newThought.length > maxCharacter
            }
            onClick={(event) => setCount(0)}
            className="send-happy-btn"
            type="submit"
            style={{ fontWeight: "bold" }}
          >
            <i className="fas fa-heart heart-icon"></i>Send Happy Thought
            <i className="fas fa-heart heart-icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
export default TextForm;
