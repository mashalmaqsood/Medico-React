import { useState } from "react";
import { checkupData } from "../../lov/data";
import Form from "../form/Form";
import './CheckupPlans.css'

const CheckupPlans = ({handleForm}) => {
  const [data, setData] = useState(checkupData[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("womenHealth");
  
  const setWomenHealthData = () => {
    setData(checkupData[0]);
    setSelectedPlan("womenHealth");
  };

  const setCancerScreeningData = () => {
    setData(checkupData[1]);
    setSelectedPlan("cancerScreening");
  };

  const setKidsVaccinesData = () => {
    setData(checkupData[2]);
    setSelectedPlan("kidsVaccinnes");
  };
  
  const toggleForm = (formOpen) =>{
    setIsFormOpen(formOpen);
    handleForm(formOpen);
  }

  return (
    <section id="checkup-plans" className="checkup-plans">
      <header>
        <div className="checkup-plans__container1">
          <h1 className="checkup-plans__heading">Health Checkup Plans</h1>
          <p className="checkup-plans__text">
            They live in Bookmarks grove right at the coast of the <br />
            Semantics, a large language ocean named flows.
          </p>
          <div className="checkup-plans__categories">
            <button
              className={`btn ${
                selectedPlan === "womenHealth" ? "btn--green" : "btn--white"
              }`}
              onClick={setWomenHealthData}
            >
              Women Health
            </button>
            <button
              className={`btn ${
                selectedPlan === "cancerScreening" ? "btn--green" : "btn--white"
              }`}
              onClick={setCancerScreeningData}
            >
              Cancer Screening
            </button>
            <button
              className={`btn ${
                selectedPlan === "kidsVaccinnes" ? "btn--green" : "btn--white"
              }`}
              onClick={setKidsVaccinesData}
            >
              Kids Vaccines
            </button>
          </div>
        </div>
      </header>
      <div className="checkup-plans__container2 grid">
        <div className="checkup-plans__content" data-aos="fade-right">
          <img
            className="checkup-plans__icon"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852866/healthcare_b15oaz.svg"
            width="50px"
            alt="medico"
          />
          <h1 id="checkup-plans__heading2" className="checkup-plans__heading2">
            {data?.heading}
          </h1>
          <p id="checkup-plans__text2" className="checkup-plans__text2">
            {data?.description}
          </p>
          <ul className="checkup-plans__list">
            {Object.values(data.ul).map((listItem, index) => (
              <li className="checkup-plans__listitem">
                <img
                  className="checkup-plans-list__icon"
                  src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852873/tick_qcykr9.svg"
                  alt="point"
                />
                {listItem}
              </li>
            ))}
          </ul>
          <button className="btn benefits-section__button" onClick={()=>toggleForm(true)}>
            Take An Appointment
          </button>
        </div>
        <div className="checkup-plans__image" data-aos="fade-left">
          <img
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1729852864/checkup_octlux.svg"
            alt="A doctor"
          />
        </div>
      </div>
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
    </section>
  );
};

export default CheckupPlans;

