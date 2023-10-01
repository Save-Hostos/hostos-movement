import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Root from "./Root";
import Gallery from "../pages/gallery/Gallery";
import Landing from "../pages/landing/Landing";
import Gerald from "../pages/gerald/Gerald";

function App() {
  return (
    <div className="app bg-[#F5F5F5]">
      <Router basename="/hostos-movement/">
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Landing />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="founders" element={<Gerald />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
