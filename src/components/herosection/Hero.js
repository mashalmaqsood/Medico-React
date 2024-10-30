import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <section className="herosection grid">
      <div className="herosection__image__container" data-aos="fade-right">
        <div className="image-text">
          <img
            className="herosection__icon"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852866/heroicon_djp7zo.svg"
            width="20px"
            height="20px"
            alt="hero-icon"
          />
          <span className="herosection__text">More than 10K Patients treated!</span>
        </div>
        <img
          className="herosection__image"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852867/heroimage_ltnumo.svg"
          alt="A doctor"
        />
      </div>
      <div className="herosection__content" data-aos="fade-left">
        <h3 className="herosection__tag">Welcome to Medico Healthcare</h3>
        <h1 className="herosection__heading">
          Your Journey to <br />
          Better Health <br />
          Starts Here
        </h1>
        <a href="https://medico.org/" target="_blank" rel="noopener noreferrer"> 
          <button className="btn">Discover More</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
