import Contact from "./components/contact/Contact.jsx";
import Feature from "./components/feature/Feature.jsx";
import Footer from "./components/footer/Footer.jsx";
import Hero from "./components/hero/Hero.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <hr className="pb-32 max-w-[1420px] mx-auto" />
      <Feature />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
