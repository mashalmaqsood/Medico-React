import React from "react";
import checkUpPlans from "../images/healthcare.svg"
import checkup from "../images/checkup.svg"
import tick from "../images/tick.svg"

const CheckupPlans = () => {
  return (
    <section id="checkup-plans" className="checkup-plans">
      <header>
        <div className="checkup-plans__container1">
          <h1 className="checkup-plans__heading">Health Checkup Plans</h1>
          <p className="checkup-plans__text">
            They live in Bookmarks grove right at the coast of the <br />
            Semantics, a large language ocean named flows.
          </p>
          <div className="checkup-plans__categories">
            <button id="women-health-btn" className="btn">
              Women Health
            </button>
            <button id="cancer-screening-btn" className="btn btn--white">
              Cancer Screening
            </button>
            <button id="kids-vaccine-btn" className="btn btn--white">
              Kids Vaccines
            </button>
          </div>
        </div>
      </header>
      <div className="checkup-plans__container2 grid">
        <div className="checkup-plans__content" data-aos="fade-right">
          <img
            className="checkup-plans__icon"
            src={checkUpPlans}
            width="50px"
          />
          <h1 id="checkup-plans__heading2" className="checkup-plans__heading2">
            Women Health Checkup
          </h1>
          <p id="checkup-plans__text2" className="checkup-plans__text2">
            A wonderful serenity has taken possession of my entire soul, <br />
            like these sweet mornings of spring.
          </p>
          <ul className="checkup-plans__list">
            <li id="list-1-text" className="checkup-plans__listitem">
              <img className="checkup-plans-list__icon" src={tick} />
              Complete Blood Count with ESR
            </li>
            <li id="list-2-text" className="checkup-plans__listitem">
              <img className="checkup-plans-list__icon" src={tick} />
              Lipid Profile, Live Profile, kidney Profile
            </li>
            <li id="list-3-text" className="checkup-plans__listitem">
              <img className="checkup-plans-list__icon" src={tick} />
              USG Abdomen with Pelvis, Mammography
            </li>
          </ul>
          <button className="btn benefits-section__button">
            Take An Appointment
          </button>
        </div>
        <div className="checkup-plans__image" data-aos="fade-left">
          <img src={checkup} alt="A doctor" />
        </div>
      </div>
    </section>
  );
};

export default CheckupPlans;
