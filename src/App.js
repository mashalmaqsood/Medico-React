import { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleForm = (value) => {
    if(value){
      document.body.classList.add("no-scroll");
    }else{
      document.body.classList.remove("no-scroll");
    }
  }

  return (
    <div className="overflow-hidden">
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
    </div>
  )
}

export default App;
