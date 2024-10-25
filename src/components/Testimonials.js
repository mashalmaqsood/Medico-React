import React from "react";
import testimonial from "../images/testimonial.svg"
import quotes from "../images/quotes.svg"
import rating from "../images/rating.svg"
import rightArrow from "../images/rightarrow.svg"
import leftArrow from "../images/leftarrow.svg"

const Testimonials = () => {
  return (
    <section id="health-care">
      <div className="grid testimonials">
        <div className="testimonial__image-container" data-aos="slide-up">
          <img
            id="testimonial-image"
            src= "https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852871/testimonial_t8x7vc.svg"
            alt="A happy,smiling patient"
            width="400px"
            height="300px"
          />
        </div>
        <div className="testimonial__container" data-aos="slide-up">
          <div className="testimonials__quotes">
            <img
              className="testimonials__quotes__image"
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852869/quotes_rudyrt.svg"
              width="50px"
              height="50px"
            />
            <div className="testimonials__rating">
              <img
                className="testimonials__rating__image"
                src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852869/rating_fsxwcu.svg"
                width="100px"
              />
            </div>
          </div>
          <span className="testimonials__heading">
            <h3 id="testimonial-quote" className="testimonial__container__text">
              “A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy”.
            </h3>
          </span>
          <div className="testimonials__patientinfo">
            <p className="patientinfo__name" id="patient-name">
              Mr. Williams
            </p>
            <p className="patientinfo__type" id="patient-type">
              Diabetes Patient
            </p>
          </div>
        </div>
        <button className="arrow-btn left-arrow" id="prev-btn">
          <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852867/leftarrow_h3y35w.svg" alt="Previous" />
        </button>
        <button className="arrow-btn right-arrow" id="next-btn">
          <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852870/rightarrow_kyvc5r.svg" alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
