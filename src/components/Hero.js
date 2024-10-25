import React from "react";
import heroIcon from "../images/heroicon.svg"
import heroImage from "../images/heroimage.svg"
const Hero = () => {
  return (
    <section className="herosection grid">
      <div className="herosection__image__container" data-aos="fade-right">
        <div className="image-text">
          <img
            className="herosection__icon"
            src={heroIcon}
            width="20px"
            height="20px"
          />
          <span className="herosection__text">More than 10K Patients treated!</span>
        </div>
        <img
          className="herosection__image"
          src={heroImage}
          alt="A doctor"
          width="280px"
          height="300px"
        />
      </div>
      <div className="herosection__content" data-aos="fade-left">
        <h3 className="herosection__tag">Welcome to Medico Healthcare</h3>
        <h1 className="herosection__heading">
          Your Journey to <br />
          Better Health <br />
          Starts Here
        </h1>
        <a href="https://medico.org/" target="_blank">
          <button className="btn">Discover More</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
