import { specialities } from "../../lov/data";
import './SpecialitySection.css'

const SpecialitySection = () => {
  return (
    <section id="services" className="SpecialityServices">
      <header className="SpecialityServices__header">
        <span className="SpecialityServices__tag"> SERVICES & TREATMENTS</span>
        <h2 className="SpecialityServices__heading">
          More than 40 speciality <br />
          and health care services
        </h2>
        <button className="btn SpecialityServices__btn">
          See All Services
        </button>
      </header>
      <div
        className="grid SpecialityServices__categories"
        data-aos="fade-right"
      >
        {specialities.map((speciality, index) => (
            <div className="SpecialityServices__category" key={index}>
              <div className="grid SpecialityServices__category__container">
                <img
                  src={speciality.image}
                  width="50px"
                  alt="speciality"
                />
                <div className="category__content">
                  <h1 className="category__content__heading">
                    {speciality.heading}
                  </h1>
                  <p className="category__content__text">
                    {speciality.text}
                  </p>
                </div>
              </div>
              <img
                className="category__button"
                src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852870/rightbutton_kupzdn.svg"
                alt="right button"
              />
            </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialitySection;
