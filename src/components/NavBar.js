import React, { useState } from "react";
import Form from "./Form";

const NavBar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleMenu = () =>{
   setIsMenuOpen((prev) => !prev)
  }

  const toggleForm = (formOpen) =>{
    setIsFormOpen(formOpen);
    props.handleForm(formOpen);
  }

  return (
    <header>
      <nav className="nav">
        <a aria-label="Medico" className="nav__brand" href="/">
          <img
            className="nav__logo"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852868/logo_reskbm.png"
            width="20px"
            height="18px"
          />
          Medico
        </a>
        <img
          className="icon nav__toggler"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852868/menu_bzrjls.svg"
          id="nav-toggler"
          onClick={toggleMenu}
        />
          <ul className={`list nav__list ${isMenuOpen ? "show" : ""}`} id="nav-list">
          <li className="nav__item">
            <a href="#">Home</a>
          </li>
          <li className="nav__item">
            <a href="#about-us">About</a>
          </li>
          <li className="nav__item">
            <a href="#services">Services</a>
          </li>
          <li className="nav__item">
            <a href="#doctors">Doctor</a>
          </li>
          <li className="nav__item">
            <a href="#health-care">Health</a>
          </li>
          <li className="nav__item">
            <a href="#checkup-plans">Checkup</a>
          </li>
          <li className="nav__item">
            <a href="#contact-page">Contact</a>
          </li>
          <button className="btn" id="appointment-btn" onClick={()=>toggleForm(true)}>
            Appointment
          </button>
        </ul>
      </nav>
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
    </header>
  );
};

export default NavBar;
