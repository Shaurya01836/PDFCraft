import React from "react";
import InfoButton from "./InfoButton";
import { Sparkles, FileImage, FileText, FileSpreadsheet, Presentation, ImageIcon, Merge, Split, RotateCw, Trash2, Edit3 } from "lucide-react";
import ToolCard from "./ToolCard";

function Tools() {
  return (
    <>
      <div className="px-6 py-16 flex flex-col items-center gap-8">
        <InfoButton
          icon={Sparkles}
          text="Complete Solution"
          bgColor="bg-gradient-red-rose"
          iconColor="text-white"
        />
        <h1 className="text-2xl md:text-2xl lg:text-5xl font-extrabold text-center text-zinc-900">
          Everything You Need for{" "}
          <span className="bg-gradient-orange-pink bg-clip-text text-transparent">
            PDFs
          </span>
        </h1>

        <p className="text-lg font-bold text-gray-600 text-center max-w-xl px-4">
          Professional-grade tools designed for efficiency. Choose from our
          comprehensive toolkit and get work done faster.
        </p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <ToolCard
            icon={FileImage}
            title="Image to PDF"
            description="Convert JPG, PNG, and other images to PDF format instantly"
            gradient="bg-gradient-emerald-cyan"
           
          />
          <ToolCard
            icon={FileText}
            title="PDF to Word"
            description="Convert PDF documents to editable Word files"
            gradient="bg-gradient-orange-pink"
           
          />
          <ToolCard
            icon={FileSpreadsheet}
            title="PDF to Excel"
            description="Extract data from PDFs into Excel spreadsheets"
            gradient="bg-gradient-purple-indigo"
           
          />
          <ToolCard
            icon={Presentation}
            title="PDF to PPT"
            description="Transform PDF content into PowerPoint presentations"
            gradient="bg-gradient-amber-orange"
          
          />
          <ToolCard
            icon={ImageIcon}
            title="PDF to Image"
            description="Convert PDF pages to high-quality images"
            gradient="bg-gradient-rose-pink"
           
          />
          <ToolCard
            icon={Merge}
            title="Merge PDFs"
            description="Combine multiple PDF files into a single document"
            gradient="bg-gradient-teal-emerald"
          
          />
          <ToolCard
            icon={Split}
            title="Split PDFs"
            description="Separate PDF pages into individual files"
            gradient="bg-gradient-violet-purple"
           
          />
          <ToolCard
            icon={RotateCw}
            title="Rotate Pages"
            description="Rotate PDF pages to the correct orientation"
            gradient="bg-gradient-cyan-blue"
          
          />
          <ToolCard
            icon={Trash2}
            title="Delete Pages"
            description="Remove unwanted pages from your PDF documents"
            gradient="bg-gradient-red-rose"
         
          />
          <ToolCard
            icon={Edit3}
            title="Edit PDF"
            description="Add text, images, and annotations to your PDFs"
            gradient="bg-gradient-indigo-cyan"
        
          />
        </div>
      </div>
    </>
  );
}

export default Tools;
