import { useState } from "react";
import './NavBar.css'

const NavBar = ({handleForm, setFormOpen}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
   setIsMenuOpen((prev) => !prev)
  }

  return (
    <header>
      <nav className="nav">
        <a aria-label="Medico" className="nav__brand" href="/" >
          <img
            className="nav__logo"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852868/logo_reskbm.png"
            width="20px"
            height="18px"
            alt="medico"
          />
          Medico
        </a>
        <img
          className="icon nav__toggler"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852868/menu_bzrjls.svg"
          id="nav-toggler"
          onClick={toggleMenu}
          alt="toggle"
        />
          <ul className={`list nav__list ${isMenuOpen ? "show" : ""}`} id="nav-list">
          <li className="nav__item">
            <a href="/">Home</a>
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
          <button className="btn" id="appointment-btn" onClick={() => { 
              handleForm(true); 
              setFormOpen(true)
              }}>
            Appointment
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
