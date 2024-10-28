import React, { useState } from "react";
import { testimonials } from "../lov/data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(newIndex);
  };

  return (
    <section id="health-care">
      <div className="grid testimonials">
        <div className="testimonial__image-container" data-aos="slide-up">
          <img
            src={testimonials[currentIndex].image}
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
            <h3 className="testimonial__container__text">
              {testimonials[currentIndex].quote}
            </h3>
          </span>
          <div className="testimonials__patientinfo">
            <p className="patientinfo__name">
              {testimonials[currentIndex].name}
            </p>
            <p className="patientinfo__type">
              {testimonials[currentIndex].type}
            </p>
          </div>
        </div>
        <button className="arrow-btn left-arrow">
          <img
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852867/leftarrow_h3y35w.svg"
            alt="Previous"
            onClick={handlePrevClick}
          />
        </button>
        <button className="arrow-btn right-arrow">
          <img
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852870/rightarrow_kyvc5r.svg"
            alt="Next"
            onClick={handleNextClick}
          />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
