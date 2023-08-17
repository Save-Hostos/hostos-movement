import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Root from "./Root";
import Gallery from "../pages/gallery/Gallery";
import Landing from "../pages/landing/Landing";
import Story from "../pages/story/Story";
import Gerald from "../pages/gerald/Gerald";

function App() {
  return (
    <div className="app bg-[#F5F5F5]">
      <Router basename="/hostos-movement/">
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Landing />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="story" element={<Story />} />
            <Route path="gerald" element={<Gerald />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
