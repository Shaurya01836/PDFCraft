import { FileText, Menu, X } from "lucide-react";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="px-6 md:px-10 py-4 flex justify-between items-center w-full border-b-2 border-emerald-100 fixed top-0 left-0 bg-white/95 z-50 shadow-sm">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <FileText className="bg-gradient-emerald-cyan text-white rounded-2xl w-10 h-10 p-2" />
        <span className="text-gradient">PDFCraft</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 font-semibold text-black/70">
        <a href="#">Tools</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-black/70 focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white shadow-md border-t border-emerald-100 flex flex-col items-center py-4 gap-4 font-semibold text-black/70 md:hidden">
          <a href="#" onClick={() => setIsOpen(false)}>Tools</a>
          <a href="#" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
