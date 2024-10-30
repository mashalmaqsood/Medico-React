import React from "react";
import { categories } from "../../lov/data"
import './CategorySection.css'

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
        {categories.map((category, index) => (
          <div className="category__container" key={index}>
            <img
              className="category__image"
              src={category.image}
              alt={category.alt}
            />
            <div className="category__info">
              <span className="category__info__text">{category.text}</span>
              <span className="category__info__heading">
                {category.heading}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
