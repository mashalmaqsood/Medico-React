import React from "react";

const TopMenu = () => {
  return (
    <div className="topmenu">
      <div className="topmenu__info">
        <span className="topmenu__location">
          <img
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852867/location_hj17gh.svg"
            width="22px"
            height="18px"
            alt="location icon"
          />
          90919 Madie run Apt. 790
        </span>
        <span className="topmenu__email">
          <img
            className="icon-email"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852864/email_rg2pxi.svg"
            width="22px"
            height="22px"
            alt="email icon"
          />
          medico@health.care
        </span>
      </div>
      <span className="topmenu__contact">
        <img
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/whatsapp_dmlevt.svg"
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
