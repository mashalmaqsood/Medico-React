import React from 'react'

const Form = ({setShowForm}) => {
  return (
    <form id="appointment-form" className="form-container">
    <button id="close-button" onClick={()=> setShowForm(false)}>x</button>
    <div className="input-group">
      <input type="text" placeholder="Name" className="input" />
    </div>
    <div className="input-group">
      <input type="text" placeholder="Phone" className="input" />
    </div>
    <div className="input-group">
      <input type="text" placeholder="Email" className="input" />
    </div>
    <div className="input-group">
      <input placeholder="Select Appointment Type" className="input" />
      <div className="dropdown-icon">
        <img src="images/dropdown.svg" />
      </div>
    </div>
    <textarea className="input input--message">Message</textarea>
    <button id="appointment-btn" className="btn form-btn">
      Submit Now
    </button>
  </form>
  )
}

export default Form
