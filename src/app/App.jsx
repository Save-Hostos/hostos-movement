import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./Root";
import Gallery from "../pages/gallery/Gallery";
import Landing from "../pages/landing/Landing";
import Story from "../pages/story/Story";
import Gerald from "../pages/gerald/Gerald";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/hostos-movement/" element={<Root />}>
        <Route index element={<Landing />} />
        <Route path="/hostos-movement/gallery" element={<Gallery />} />
        <Route path="/hostos-movement/story" element={<Story />} />
        <Route path="/hostos-movement/gerald" element={<Gerald />} />
      </Route>
    )
  );

  return (
    <div className="app bg-[#F5F5F5]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
