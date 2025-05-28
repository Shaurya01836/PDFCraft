import React from "react";
import InfoButton from "./InfoButton";
import { Shield, Sparkles, Star, SplitSquareVertical } from "lucide-react";

function Header() {
  return (
    <div className="relative overflow-hidden">
      {/* Blurred Gradient Background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-200 via-white to-orange-100 backdrop-blur-3xl blur-3xl"
      
      />

    
      <div className="relative z-10 px-6 py-16 flex flex-col items-center gap-8">
        <InfoButton
          icon={SplitSquareVertical}
          text="Trusted by 10,000+ professionals worldwide"
          bgColor="bg-gradient-to-r from-emerald-400 to-cyan-500"
          iconColor="text-white"
        />

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-zinc-900">
          Powerful All-in-One
        </h1>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center bg-gradient-to-r from-emerald-500 via-cyan-500 to-orange-400 text-transparent bg-clip-text">
          PDF Toolkit
        </h1>

        <p className="text-lg font-bold text-gray-600 text-center max-w-xl px-4">
          Convert, Merge, Split, Edit and Secure your PDFs with professional-grade
          tools. <span className="text-cyan-600 font-bold">Lightning fast</span>{" "}
          and <span className="text-blue-600 font-bold">completely secure</span>.
        </p>

        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <button className="px-6 py-3 bg-gradient-emerald-cyan text-white font-semibold rounded-2xl shadow-md hover:scale-105 transition">
            Get Started for Free →
          </button>
          <button className="px-6 py-3 border-2 bg-white border-gray-200 rounded-2xl font-semibold hover:border-emerald-200 transition">
            View Demo
          </button>
        </div>

        <div className="flex gap-8 mt-10 flex-wrap justify-center">
          {/* <InfoButton
            icon={Shield}
            text="Bank-level Security"
            bgColor="bg-white shadow"
            iconColor="text-emerald-500"
          /> */}
          <InfoButton
            icon={Sparkles}
            text="No Registration Required"
            bgColor="bg-white shadow"
            iconColor="text-blue-500"
          />
          <InfoButton
            icon={Star}
            text="Loved by Developers"
            bgColor="bg-white shadow"
            iconColor="text-yellow-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
