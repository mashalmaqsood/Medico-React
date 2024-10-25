import React from 'react'
import mentalService from "../images/mentalservice.svg"
import eyeIcon from "../images/eye.svg"
import vaccinationIcon from "../images/vaccination.svg"
import heartIcon from "../images/heart.svg"
import rightButton from "../images/rightbutton.svg"

const SpecialitySection = () => {
  return (
    <section id="services" className="SpecialityServices">
      <header className="SpecialityServices__header">
        <span className="SpecialityServices__tag"> SERVICES & TREATMENTS</span>
        <h2 className="SpecialityServices__heading">
          More than 40 speciality <br />
          and health care services
        </h2>
        <button className="btn SpecialityServices__btn">See All Services</button>
      </header>
      <div className="grid SpecialityServices__categories" data-aos="fade-right">
        <div className="SpecialityServices__category">
          <div className="grid SpecialityServices__category__container">
            <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852868/mentalservice_nx0xrw.svg" width="50px" />
            <div className="category__content">
              <h1 className="category__content__heading">Mental Health Service</h1>
              <p className="category__content__text">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
            </div>
          </div>
          <img className="category__button" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852870/rightbutton_kupzdn.svg"/>
        </div>
        <div className="SpecialityServices__category">
          <div className="grid SpecialityServices__category__container">
            <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852864/eye_rclzkt.svg" width="50px" />
            <div className="category__content">
              <h1 className="category__content__heading">Eye Diseasses Service</h1>
              <p className="category__content__text">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
            </div>
          </div>
          <img className="category__button" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852870/rightbutton_kupzdn.svg"/>
        </div>
        <div className="SpecialityServices__category">
          <div className="grid SpecialityServices__category__container">
            <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852871/vaccination_nngqtd.svg" width="50px" />
            <div className="category__content">
              <h1 className="category__content__heading">Vaccination Service</h1>
              <p className="category__content__text">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
            </div>
          </div>
          <img className="category__button" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852870/rightbutton_kupzdn.svg" />
        </div>
        <div className="SpecialityServices__category">
          <div className="grid SpecialityServices__category__container">
            <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852866/heart_ndhjxx.svg" width="50px" />
            <div className="category__content">
              <h1 className="category__content__heading">Cardiology Service</h1>
              <p className="category__content__text">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
            </div>
          </div>
          <img className="category__button" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852870/rightbutton_kupzdn.svg" />
        </div>
      </div>
    </section>
  )
}

export default SpecialitySection
