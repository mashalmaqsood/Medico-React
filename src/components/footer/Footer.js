import { useState } from "react";
import Form from "../form/Form";
import { links } from "../../lov/data";
import "./Footer.css";
import {
  listItemsOne,
  listItemsTwo,
  listItemsThree,
  listItemsFour,
} from "../../lov/data";

const Footer = ({ handleForm, setFormOpen }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);



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
              alt="medico"
            />
            <span>Medico</span>
          </div>
          <div className="footer__buttton-container">
            <button className="btn--footer" onClick={() => { 
              handleForm(true); 
              setFormOpen(true)
              }}>
              <img
                src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852863/appointment_ss1ehz.svg"
                width="12px"
                alt="appointment"
              />
              Take An Appointment
            </button>
            <a
              className="btn--footer footer__tag"
              href="https://wa.me/92031352736264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/whatsapp_dmlevt.svg"
                width="12px"
                alt="Whatsapp"
              />
              Connect on Whatsapp
            </a>
          </div>
        </div>
        <ul className="footer__section">
          <li className="footer__section__heading">SERVICES</li>
          {listItemsOne.map((listItem, index) => (
            <li className="footer__section__listitem" key={index}>
              {listItem}
            </li>
          ))}
        </ul>
        <ul className="footer__section">
          <li className="footer__section__heading">HEALTH CHECKUP</li>
          {listItemsTwo.map((listItem, index) => (
            <li className="footer__section__listitem" key={index}>
              {listItem}
            </li>
          ))}
        </ul>
        <ul className="footer__section">
          <li className="footer__section__heading">DEPARTMENTS</li>
          {listItemsThree.map((listItem, index) => (
            <li className="footer__section__listitem" key={index}>
              {listItem}
            </li>
          ))}
        </ul>
        <ul className="footer__section">
          <li className="footer__section__heading">QUICK LINKS</li>
          {listItemsFour.map((listItem, index) => (
            <li className="footer__section__listitem" key={index}>
              {listItem}
            </li>
          ))}
        </ul>
        <div className="footer__icons">
          {links.map((link, index) => (
            <a
              href={link.href}
              target="_blank"
              key={index}
              rel="noopener noreferrer"
            >
              <img
                className="footer__icon"
                src={link.src}
                width="20px"
                alt="footer icon"
              />
            </a>
          ))}
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
