import "./App.css";
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
  return (
    <>
      <TopMenu />
      <NavBar />
      <Hero />
      <CategorySection />
      <SpecialitySection/>
      <BenefitsSection />
      <CheckupPlans />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
