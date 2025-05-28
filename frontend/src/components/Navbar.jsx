import { FileText } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div className="px-10 py-4 flex justify-between items-center w-full border-b-2 border-emerald-100 fixed top-0 left-0 bg-white/95  z-50 shadow-sm">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <FileText className="bg-gradient-emerald-cyan text-white rounded-2xl w-10 h-10 p-2" />
        <span className="text-gradient">PDFCraft</span>
      </h1>
      <div className="flex items-center gap-6 font-semibold text-black/70">
        <a href="#">Tools</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
      </div>
    </div>
  );
}

export default Navbar;
