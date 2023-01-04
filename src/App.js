import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Jabulani</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App
