import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./scenes/Landing";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
