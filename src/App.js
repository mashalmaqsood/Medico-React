import "./App.css";
import { useState } from "react";
import BenefitsSection from "./components/BenefitsSection";
import CategorySection from "./components/CategorySection";
import CheckupPlans from "./components/CheckupPlans";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SpecialitySection from "./components/SpecialitySection";
import Testimonials from "./components/Testimonials";
import TopMenu from "./components/TopMenu";

function App() {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    document.body.classList.add("no-scroll");
    setShowForm(true);
  };

  const closeForm = () => {
    document.body.classList.remove("no-scroll");
    setShowForm(false);
  };

  return (
    <>
      <TopMenu />
      <NavBar openForm={openForm} closeForm={closeForm} showForm={showForm}/>
      <Hero />
      <CategorySection />
      <SpecialitySection/>
      <BenefitsSection openForm={openForm} closeForm={closeForm} showForm={showForm} />
      <CheckupPlans openForm={openForm} closeForm={closeForm} showForm={showForm}/>
      <Testimonials />
      <Contact />
      <Footer openForm={openForm} closeForm={closeForm} showForm={showForm}/>
    </>
  );
}

export default App;
