import React from "react";
import locationIcon from "../images/location.svg";
import emailIcon from "../images/email.svg";
import whatsappIcon from "../images/whatsapp.svg";

const TopMenu = () => {
  return (
    <div className="topmenu">
      <div className="topmenu__info">
        <span className="topmenu__location">
          <img
            src={locationIcon}
            width="22px"
            height="18px"
            alt="location icon"
          />
          90919 Madie run Apt. 790
        </span>
        <span className="topmenu__email">
          <img
            className="icon-email"
            src={emailIcon}
            width="22px"
            height="22px"
            alt="email icon"
          />
          medico@health.care
        </span>
      </div>
      <span className="topmenu__contact">
        <img
          src={whatsappIcon}
          width="22px"
          height="18px"
          alt="Whatsapp icon"
        />
        Connect on Whatsapp
      </span>
    </div>
  );
};

export default TopMenu;
