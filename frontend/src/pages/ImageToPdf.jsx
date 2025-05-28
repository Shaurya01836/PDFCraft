import React, { useState } from "react";
import jsPDF from "jspdf";

function ImageToPdf() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setImages(imagePreviews);
  };

  const generatePDF = () => {
    if (images.length === 0) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    images.forEach((img, index) => {
      const image = new Image();
      image.src = img;
      image.onload = () => {
        const imgWidth = image.width;
        const imgHeight = image.height;
        const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
        const width = imgWidth * ratio;
        const height = imgHeight * ratio;

        pdf.addImage(img, "JPEG", (pageWidth - width) / 2, 20, width, height);
        if (index < images.length - 1) {
          pdf.addPage();
        }
        if (index === images.length - 1) {
          pdf.save("converted.pdf");
        }
      };
    });
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 flex flex-col items-center gap-8">
      <h1 className="text-2xl md:text-2xl lg:text-5xl font-extrabold text-center text-zinc-900">
        Image to PDF
        <span className="bg-gradient-emerald-cyan bg-clip-text text-transparent">
          Converter
        </span>
      </h1>
      <p className="text-lg font-bold text-gray-600 text-center max-w-xl px-4">
        Convert your JPG, PNG, and other image formats to PDF instantly.
        Maintain quality and organize multiple images into a single PDF
        document.
      </p>

      <input
        type="file"
        accept="image/png, image/jpeg"
        multiple
        onChange={handleImageUpload}
        className="border p-2 rounded-md"
      />

      <div className="flex gap-4 flex-wrap justify-center mt-6">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`preview-${idx}`}
            className="w-40 h-40 object-cover rounded shadow"
          />
        ))}
      </div>

      {images.length > 0 && (
        <button
          onClick={generatePDF}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
        >
          Convert to PDF
        </button>
      )}
    </div>
  );
}

export default ImageToPdf;
