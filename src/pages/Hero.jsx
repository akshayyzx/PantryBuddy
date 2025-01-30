import React from 'react';
import "../styles/Hero.css";
import womanimage from "../assets/woman.png"; // Corrected import

export const Hero = () => {
  return (
    <div className="container">
      <div className="text-container">
        <div className='heading-box'>
          <h1 className='heading-1'> <b>DISCOVER THE POWER OF PANTRYBUDDY</b> </h1>
          <p className='para-1'>
            PantryBuddy is a smart kitchen assistant that helps you manage ingredients, reduce food waste, and save time.
          </p>
        </div>
        <button className='get-started'>Get Started</button>
      </div>
      <div className="image-container">
        <img src={womanimage} alt="Smiling woman in kitchen" />
      </div>
    </div>
   
  );
};
