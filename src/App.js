import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
// help pages 
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>

      </Route>
    )
  );

  return (

    <RouterProvider router={router} />
  );
}

export default App
