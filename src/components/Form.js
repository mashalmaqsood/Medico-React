import React from "react";

const Form = ({setIsFormOpen }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
    setIsFormOpen(false)
  };

  return (
    <form id="appointment-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" placeholder="Name" className="input" required />
        <input type="tel" placeholder="Phone" className="input" required />
        <input type="email" placeholder="Email" className="input" required />
        <select className="input select-input" required>
          <option value="" disabled selected>
            Select Appointment Type
          </option>
          <option value="general-checkup">General Checkup</option>
          <option value="specialist">Specialist Appointment</option>
          <option value="follow-up">Follow-up</option>
        </select>
        <textarea
          className="input input--message"
          placeholder="Message"
          required
        />
        <button
          id="appointment-btn"
          className="btn form-btn"
          type="submit"
        >
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default Form;
