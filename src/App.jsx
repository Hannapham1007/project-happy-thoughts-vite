import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import TextForm from "./components/TextForm.jsx";
import Message from "./components/Message.jsx";

// Authors Karolina, Klara, Hanna
export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newThought, setNewThought] = useState("");
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  // Fetch initial thoughts through API
  const fetchThoughts = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
    setLoading(false);
  };
  useEffect(() => {
    fetchThoughts();
  }, []);

  if (loading) {
    return (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
    )
  }

  /* Function for handling clicks on like button
   * @param thoughtID: _id of liked thought
   * 
   * This functions creates a new thoughts list by iterating through
   * the old list and updating the 'hearts'-attribute of the thought
   * which got liked. Then update state thoughts through setThoughts.
   */
  const handleLikeButtonClick = (thoughtID) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtID}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((updatedThought) => {
        let updatedThoughtsList = thoughts.map((thought) => {
          // Iterate old thought-list and update the one which got liked
          if(thought._id === updatedThought._id) {
            return {
              ...thought,
              hearts: updatedThought.hearts
            }
          }
          return thought;
        });
        setThoughts(updatedThoughtsList);
      });
  };

  // Handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(apiUrl, options)
      .then((res) => res.json())
      .then((updatedThought) => {
        setThoughts((thought) => [updatedThought, ...thought]);
      });
    // After updating a new thought, clear input of the textform
    setNewThought("");
  };

  return (
    <div className="app-container">
      <Header />
      <div className="text-form-container-app">
      <TextForm
        handleFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      </div>
      <div className="message-container-app">
     
      {thoughts.map((thought) => {
        return (
          <div key={thought._id} className="thought-container">
            <Message
              props={thought}
              handleLikeButtonClick={handleLikeButtonClick}
            />
          </div>
          
        );

      })}
      </div>
      <p style={{textAlign:'center', wordBreak:'break-word', paddingTop:'20px', fontSize:'14px', fontWeight:'bold'}}>A Technigo project by Karolina, Klara and Hanna</p>


    </div>
  );
};