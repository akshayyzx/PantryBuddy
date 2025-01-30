import React from 'react'
import "../styles/About.css"
import logo1 from "../assets/logo1.jpg"
import logo2 from "../assets/logo2.jpg"
import logo3 from "../assets/logo3.jpg"

export const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-heading">ABOUT PANTRYBUDDY</h1>
      <p className="about-description">
        PantryBuddy is revolutionizing the way we manage our kitchens. Our smart assistant helps you stay organized, reduce waste, and make healthier choices, all with the convenience of voice control and shared accounts.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <img src={logo1} alt="PantryBuddy Logo" className="about-icon" />
          <h3>PantryBuddy Logo</h3>
          <p>Elevate Your Kitchen Management</p>
        </div>

        <div className="about-card">
          <img src={logo3} alt="New Business Logo" className="about-icon" />
          <h3>New Business Logo</h3>
          <p>Streamline Your Culinary Journey</p>
        </div>

        <div className="about-card" >
          <img src={logo2} alt="The Book of PantryBuddy" className="about-icon" id='sizer'/>
          <h3>The Book of PantryBuddy</h3>
          <p>Mastering the Art of Kitchen Efficiency</p>
        </div>
      </div>
    </section>
  )
}
