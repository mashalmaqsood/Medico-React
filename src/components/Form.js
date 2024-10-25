import React from "react";

const Form = ({ setShowForm }) => {
  return (
    <form id="appointment-form" className="form-container">
      <button id="close-button" onClick={() => setShowForm(false)}>
        x
      </button>
      <div className="input-group">
        <input type="text" placeholder="Name" className="input" />
        <input type="tel" placeholder="Phone" className="input" />
        <input type="email" placeholder="Email" className="input" />
        <select className="input select-input">
          <option value="" disabled selected>
            Select Appointment Type
          </option>
          <option value="general-checkup">General Checkup</option>
          <option value="specialist">Specialist Appointment</option>
          <option value="follow-up">Follow-up</option>
        </select>
        <textarea className="input input--message" placeholder="Message"/>
        <button id="appointment-btn" className="btn form-btn">
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default Form;
