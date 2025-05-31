import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImageToPdf from "./pages/ImageToPdf";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-to-pdf" element={<ImageToPdf />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route path="/pdf-to-word" element={<UnderConstruction />} />
        <Route path="/pdf-to-excel" element={<UnderConstruction />} />
        <Route path="/pdf-to-ppt" element={<UnderConstruction />} />
        <Route path="/pdf-to-image" element={<UnderConstruction />} />
        <Route path="/merge-pdf" element={<UnderConstruction />} />
        <Route path="/split-pdf" element={<UnderConstruction />} />
        <Route path="/rotate-pages" element={<UnderConstruction />} />
        <Route path="/delete-pages" element={<UnderConstruction />} />
        <Route path="/edit-pdf" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
