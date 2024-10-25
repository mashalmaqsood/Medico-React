import React from 'react'
import dropDownIcon from "../images/dropdown.svg"
import emailIcon from "../images/email.svg"
import phoneIcon from "../images/phone.svg"

const Contact = () => {
  return (
    <section id="contact-page" className="contact-container grid">
    <div className="contact-container__content" data-aos="fade-right">
      <span className="contact-container__tag">APPOINTMENT</span>
      <h3 className="contact-container__heading">
        Get in touch to book <br />
        your first appointment
      </h3>
      <p className="contact-container__text">
        Far far away, behind the word mountains, far <br />
        from the countries Vokalia and Consonantia.
      </p>
      <div className="contact-container__info">
        <span>
          <img className="contact-container__image" src={emailIcon} />
          (123) 456-7890
        </span>
        <span>
          <img className="contact-container__image" src={phoneIcon} />
          medico@health.care
        </span>
      </div>
    </div>
    <div className="contact-container__form" data-aos="fade-left">
      <div className="input-group">
        <input type="text" placeholder="Name" className="input" />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Phone" className="input" />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Email" className="input" />
      </div>
      <div className="input-group">
        <input placeholder="Select Appointment Type" className="input" />
        <div className="dropdown-icon">
          <img src={dropDownIcon}/>
        </div>
      </div>
      <textarea className="input input--message">Message</textarea>
      <button className="btn form-btn">Submit Now</button>
    </div>
  </section>
  )
}

export default Contact
