import { FileText } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-10 py-10 flex flex-col md:flex-row justify-between items-center border-b border-white/40">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <FileText className="bg-gradient-emerald-cyan text-white rounded-2xl w-10 h-10 p-2" />
          <span className="text-2xl font-bold text-gradient">PDFCraft</span>
        </div>

        <div className="flex items-center gap-6 font-semibold text-white/90">
          <a href="#" className="hover:text-white">Tools</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">About</a>
        </div>
      </div>

      <p className="text-center text-lg text-white/70 py-10">
        © 2025 PDFCraft. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
