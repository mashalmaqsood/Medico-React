import { useEffect, useState } from "react";
import BenefitsSection from "./components/benefitsection/BenefitsSection";
import CategorySection from "./components/categorysection/CategorySection";
import CheckupPlans from "./components/checkup-plans/CheckupPlans";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/herosection/Hero";
import NavBar from "./components/navbar/NavBar";
import SpecialitySection from "./components/specialitysection/SpecialitySection";
import Testimonials from "./components/testimonials/Testimonials";
import TopMenu from "./components/topmenu/TopMenu";
import Form from "./components/form/Form";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [scroll, setScroll] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleForm = (value) => {
    if(value){
      setScroll(true);
    }else{
      setScroll(false);
    }
  }

  const toggleForm = (formOpen) =>{
    setFormOpen(formOpen);
    handleForm(formOpen);
  }

  return (
    <div className={`${scroll ? 'no-scroll' : 'scroll'}`}>
      <TopMenu />
      <NavBar handleForm={handleForm} setFormOpen={setFormOpen}/>
      <Hero />
      <CategorySection />
      <SpecialitySection/>
      <BenefitsSection handleForm={handleForm} setFormOpen={setFormOpen}/>
      <CheckupPlans handleForm={handleForm} setFormOpen={setFormOpen}/>
      <Testimonials />
      <Contact />
      <Footer handleForm={handleForm} setFormOpen={setFormOpen}/>
      {formOpen && (
        <>
          <div className="overlay" ></div>
          <div className="form-container">
            <button id="close-button" onClick={()=>toggleForm(false)}>
              x
            </button>
            <Form setIsFormOpen={setFormOpen}/>
          </div>
        </>
      )}
    </div>
  )
}

export default App;
