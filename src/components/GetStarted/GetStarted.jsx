import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Ulom</span>
          <span className="secondaryText">
            Subscribe and find super attactive price quotes from the confort of your home.
            <br />
            Find your home
          </span>
          <button className="button">
            <a href="mailto:samuelafo.212@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
