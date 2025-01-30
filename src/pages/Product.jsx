import React from 'react'
import foood1 from "../assets/foood1.jpg"
import foood2 from "../assets/foood2.jpg"
import foood3 from "../assets/foood3.jpg"
import "../styles/Product.css"

export const Product = () => {
  return (
    <section className="smart-grocery">
    <h4 className="subheading">Explore Our Products</h4>
    <h1 className="heading">SMART GROCERY ASSISTANCE</h1>
    <p className="description">
      PantryBuddy's suite of features empowers you to manage your kitchen like a pro.
      From expiry alerts to AI-powered recipe suggestions, our smart assistant helps you reduce waste.
    </p>

    <div className="grocery-cards">
      <div className="card">
        <img src={foood3} alt="Seasonal Produce" />
        <h3>Seasonal Produce</h3>
        <p>Nutritional Breakdowns</p>
        <p className="subtext">Pricing</p>
      </div>

      <div className="card">
        <img src={foood2} alt="Meal Prep Hacks" />
        <h3>Meal Prep Hacks</h3>
        <p>Cost-Effective Solutions</p>
        <p className="subtext">Sustainable</p>
      </div>

      <div className="card">
        <img src={foood1} alt="Reduce Waste with Tips" />
        <h3>Reduce Waste with Tips</h3>
        <p>Optimize Your Grocery Budget</p>
        <p className="subtext">Personalized</p>
      </div>
    </div>
  </section>
);
};
  
