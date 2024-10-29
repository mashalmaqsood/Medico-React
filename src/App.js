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

  const handleForm = (value) => {
    if(value){
      document.body.classList.add("no-scroll");
    }else{
      document.body.classList.remove("no-scroll");
    }
  }

  return (
    <>
      <TopMenu />
      <NavBar handleForm={handleForm}/>
      <Hero />
      <CategorySection />
      <SpecialitySection/>
      <BenefitsSection handleForm={handleForm}/>
      <CheckupPlans handleForm={handleForm}/>
      <Testimonials />
      <Contact />
      <Footer handleForm={handleForm}/>
    </>
  )
}

export default App;
