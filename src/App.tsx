import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./scenes/Landing";
import Portfolio from "./scenes/Portfolio";
import About from "./scenes/About";
import Contact from "./scenes/Contact";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
