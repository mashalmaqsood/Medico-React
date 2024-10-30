import React from 'react'
import Form from '../form/Form'
import './Contact.css'

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
          <img className="contact-container__image" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852864/email_rg2pxi.svg" alt='contact-us' />
          (123) 456-7890
        </span>
        <span>
          <img className="contact-container__image" src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852869/phone_qlmusf.svg" alt='email-us'/>
          medico@health.care
        </span>
      </div>
    </div>
    <div className="contact-container__form" data-aos="fade-left">
      <Form/>
      </div>
  </section>
  )
}

export default Contact
