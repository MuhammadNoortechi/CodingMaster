import React from "react";
import Home from "./components/pages/Home";
import Header from "../src/components/Header";
import About from "./components/pages/About"
import Services from "./components/pages/Services";
import Career from "./components/pages/Career"
import Blog from "./components/pages/Blog"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
