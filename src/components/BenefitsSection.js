import React from "react";
import benefits from "../images/benefits.svg"
import tick from "../images/tick.svg"

const BenefitsSection = () => {
  return (
    <section id="about-us" className="benefits-section">
      <div className="benefits-section__container">
        <div className="benefits-section__image" data-aos="fade-right">
          <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852865/benefits_ynafdx.svg" alt="A doctor" />
        </div>
        <div className="benefits-section__content" data-aos="fade-left">
          <h3 className="benefits-section__heading">Why Choose Us?</h3>
          <ul className="benefits-section__list">
            <li className="benefits-section__listitem">
              <img className="benefits-section__icon" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/tick_qcykr9.svg" />
              Safety First Quality Must
            </li>
            <li className="benefits-section__listitem">
              <img className="benefits-section__icon" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/tick_qcykr9.svg"/>
              Patient-Centric Approach
            </li>
            <li className="benefits-section__listitem">
              <img className="benefits-section__icon" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/tick_qcykr9.svg" />
              Focused Leadership
            </li>
            <li className="benefits-section__listitem">
              <img className="benefits-section__icon" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/tick_qcykr9.svg" />
              Cutting-Edge Technology
            </li>
            <li className="benefits-section__listitem">
              <img className="benefits-section__icon" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/tick_qcykr9.svg" />
              Transparent Pricing
            </li>
            <li className="benefits-section__listitem">
              <img className="benefits-section__icon" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/tick_qcykr9.svg" />
              Coordinated Care
            </li>
          </ul>
        </div>
      </div>
      <div className="benefitsSecion__contentcontainer">
        <h3 className="benefits-section__heading">Wellness, Compassion, Quality</h3>
        <p className="benefits-section__text">
          They live in Bookmarks grove right at the coast of the Semantics, a
          large language ocean. A <br />
          small river named Duden flows by their place and supplies it.
        </p>
        <button className="btn benefits-section__button">
          Take An Appointment
        </button>
      </div>
    </section>
  );
};

export default BenefitsSection;
