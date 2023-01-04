import React from "react";
import { 
  createBrowserRouter, 
  Route, 
  Routes, 
  Link, 
  NavLink,
  createRoutesFromElements,
  RouterProvider} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

// layouts
import RootLayout from "./layouts/RootLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (

   <RouterProvider router={router} />
  );
}

export default App
