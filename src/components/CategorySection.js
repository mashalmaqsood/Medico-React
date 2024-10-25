import React from 'react'
import pediatrician from "../images/pediatrician.svg"
import cardiologist from "../images/cardiologist.svg"
import dermatologist from "../images/dermatologist.svg"

const CategorySection = () => {
  return (
    <section id="doctors" className="catgory-container">
    <h2 className="catgory-container__heading">
      Dedicated to provide best treatment.
    </h2>
    <p className="catgory-container__text">
      A wonderful serenity has taken possession of my entire soul, like these
      sweet mornings of spring <br />
      which I enjoy with my whole heart. I am alone, and feel the charm of
      existence in this spot, which <br />
      was created for the bliss of souls like mine.
    </p>
    <div className="categoryservices" data-aos="fade-left">
      <div className="category__container">
        <img
          className="category__image"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852881/pediatrician_tx4lxr.svg"
          alt="Pediatrician"
        />
        <div className="category__info">
          <span className="category__info__text"> For your health </span>
          <span className="category__info__heading">Pediatrician</span>
        </div>
      </div>
      <div className="category__container">
        <img
          className="category__image"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852878/cardiologist_dmuhf9.svg"
          alt="Cardiologist"
        />
        <div className="category__info">
          <span className="category__info__text"> For your health </span>
          <span className="category__info__heading">Cardiologist</span>
        </div>
      </div>
      <div className="category__container">
        <img
          className="category__image"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852875/dermatologist_z1uwxa.svg"
          alt="Dermatologist"
        />
        <div className="category__info">
          <span className="category__info__text"> For your health </span>
          <span className="category__info__heading">Dermatologist</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CategorySection
