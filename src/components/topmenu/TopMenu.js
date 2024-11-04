import './TopMenu.css'

const TopMenu = () => {
  return (
    <div className="topmenu">
      <div className="topmenu__info">
        <a className="topmenu__location" href="https://maps.app.goo.gl/tTHfpB7wUX4vejXr7" target="_blank" rel="noopener noreferrer">
          <img
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852867/location_hj17gh.svg"
            width="22px"
            height="18px"
            alt="location icon"
          />
          90919 Madie run Apt. 790
        </a>
        <a className="topmenu__email" href="mailto:mashal@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            className="icon-email"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852864/email_rg2pxi.svg"
            width="22px"
            height="22px"
            alt="email icon"
          />
          medico@health.care
        </a>
      </div>
      <a className="topmenu__contact" href="https://wa.me/92031352743276" target="_blank" rel="noopener noreferrer">
        <img
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/whatsapp_dmlevt.svg"
          width="22px"
          height="18px"
          alt="Whatsapp icon"
        />
        Connect on Whatsapp
      </a>
    </div>
  );
};

export default TopMenu;
