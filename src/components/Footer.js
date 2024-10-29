import React,{useState} from 'react'
import Form from './Form';
import { links } from '../lov/data';

const Footer = ({handleForm}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
 
  const toggleForm = (formOpen) =>{
    setIsFormOpen(formOpen);
    handleForm(formOpen);
  }

  return (
    <footer className="footer">
    <div className="container footer-sections">
      <div className="footer-section1">
        <div className="footer-section1__heading">
          <img
            className="footer-section1__icon"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852866/healthcare_b15oaz.svg"
            width="20px"
            height="20px"
          />
          <span>Medico</span>
        </div>
        <div className="footer__buttton-container">
          <button className="btn--footer" onClick={()=>toggleForm(true)} >
            <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852863/appointment_ss1ehz.svg" width="12px" />
            Take An Appointment
          </button>
          <button className="btn--footer">
            <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/whatsapp_dmlevt.svg" width="12px" />
            Connect on Whatsapp
          </button>
        </div>
      </div>
      <ul className="footer__section">
        <li className="footer__section__heading">SERVICES</li>
        <li className="footer__section__listitem">Pathology</li>
        <li className="footer__section__listitem">Ambulance</li>
        <li className="footer__section__listitem">Radiology</li>
        <li className="footer__section__listitem">Pharmacy</li>
      </ul>
      <ul className="footer__section">
        <li className="footer__section__heading">HEALTH CHECKUP</li>
        <li className="footer__section__listitem">Woman Health</li>
        <li className="footer__section__listitem">Cancer Screening</li>
        <li className="footer__section__listitem">Cardiac Health</li>
        <li className="footer__section__listitem">MRI Checkup</li>
      </ul>
      <ul className="footer__section">
        <li className="footer__section__heading">DEPARTMENTS</li>
        <li className="footer__section__listitem">General</li>
        <li className="footer__section__listitem">Dermatology</li>
        <li className="footer__section__listitem">Cardiology</li>
        <li className="footer__section__listitem">Cancer</li>
      </ul>
      <ul className="footer__section">
        <li className="footer__section__heading">QUICK LINKS</li>
        <li className="footer__section__listitem">License</li>
        <li className="footer__section__listitem">Changelog</li>
      </ul>
      <div className="footer__icons">
        {links.map((link, index) => (
            <a href={link.href} target="_blank" key={index}>
            <img className="footer__icon" src={link.src} width="20px" />
          </a>
        ))}
      </div>
    </div>
    {isFormOpen && (
        <>
          <div className="overlay" ></div>
          <div className="form-container">
            <button id="close-button" onClick={()=>toggleForm(false)}>
              x
            </button>
            <Form setIsFormOpen={setIsFormOpen}/>
          </div>
        </>
      )}
  </footer>
  )
}

export default Footer