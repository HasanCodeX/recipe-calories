import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-content">
        <h1>Discover an Exceptional Cooking Class Tailored for You!</h1>
        <p>
          Learn and master basic programming, data structures, algorithms, OOP,
          databases, and solve 500+ coding problems to become an exceptionally
          well world-class programmer.
        </p>
        <div className="banner-buttons">
          <button className="explore-button">Explore Now</button>
          <button className="feedback-button">Our Feedback</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
