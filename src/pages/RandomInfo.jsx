import React from "react";
import "../styles/RandomInfo.css";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";

export const RandomInfo = () => {
  return (
    <section className="reduce-waste">
      <h4 className="subheading">Manage Ingredients</h4>
      <h1 className="heading">REDUCE WASTE</h1>
      <p className="description">
        PantryBuddy's advanced features make it a game-changer in the kitchen.
        Stay on top of expiration dates, get personalized recipe suggestions,
        plan meals with estimated costs, analyze nutrition.
      </p>

      <div className="features">
        <div className="feature-card">
          <img src={food1} alt="Expiry Alerts" />
          <h3>EXPIRY ALERTS</h3>
          <ul>
            <li>AI Recipes</li>
            <li>Meal Planning</li>
            <li>Nutrition Info</li>
          </ul>
        </div>

        <div className="feature-card">
          <img src={food2} alt="Pricing Surveys" />
          <h3>PRICING SURVEYS</h3>
          <ul>
            <li>Waste Tips</li>
            <li>Voice Control</li>
            <li>Shared</li>
          </ul>
        </div>

        <div className="feature-card">
          <img src={food3} alt="Sustainable" />
          <h3>SUSTAINABLE</h3>
          <ul>
            <li>Reduce Your</li>
            <li>Make a Difference</li>
            <li>Save Time</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
