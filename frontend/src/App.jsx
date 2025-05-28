import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImageToPdf from "./pages/ImageToPdf"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-to-pdf" element={<ImageToPdf />} />
      </Routes>
    </Router>
  );
}

export default App;
