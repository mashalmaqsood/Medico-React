import React from 'react'
import healthCareIcon from "../images/healthcare.svg"
import appointmentIcon from "../images/appointment.svg"
import whatsappIcon from "../images/whatsapp.svg"
import facebookIcon from "../images/facebook.svg"
import twitterIcon from "../images/twitter.svg"
import pinterestIcon from "../images/pinterest.svg"
import instagramIcon from "../images/instagram.svg"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container footer-sections">
      <div className="footer-section1">
        <div className="footer-section1__heading">
          <img
            className="footer-section1__icon"
            src={healthCareIcon}
            width="20px"
            height="20px"
          />
          <span>Medico</span>
        </div>
        <div className="footer__buttton-container">
          <button className="btn--footer">
            <img src={appointmentIcon} width="12px" />
            Take An Appointment
          </button>
          <button className="btn--footer">
            <img src={whatsappIcon} width="12px" />
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
        <a href="https://www.facebook.com/algolix/" target="_blank">
          <img className="footer__icon" src={facebookIcon} width="20px" />
        </a>

        <a href="https://x.com/elonmusk" target="_blank">
          <img className="footer__icon" src={twitterIcon} width="20px" />
        </a>
        <a
          href="https://www.pinterest.com/pin/633387442784344/"
          target="_blank"
        >
          <img className="footer__icon" src={pinterestIcon} width="20px" />
        </a>
        <a
          href="https://www.instagram.com/explore/locations/106720507792523/algolix-technologies/"
          target="_blank"
        >
          <img className="footer__icon" src={instagramIcon} width="20px" />
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer