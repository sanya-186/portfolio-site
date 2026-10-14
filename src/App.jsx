import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Certifications,
  Contact,
  Footer,
  ParticleRing,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ParticleRing />
        
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certifications />
        
        <div className="relative z-0">
          <Contact />
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
