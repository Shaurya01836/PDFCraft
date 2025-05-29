import React, { useState } from "react";
import jsPDF from "jspdf";
import { FileImage, Upload } from "lucide-react";

function ImageToPdf() {
  const [images, setImages] = useState([]);
  const [borderSize, setBorderSize] = useState(10); // in mm
  const [rotation, setRotation] = useState(0); // 0, 90, 180, 270
  const [orientation, setOrientation] = useState("p"); // 'p' or 'l'

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setImages(imagePreviews);
  };

  const generatePDF = () => {
    if (images.length === 0) return;

    const pdf = new jsPDF(orientation, "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    let imagesProcessed = 0;

    images.forEach((img, index) => {
      const image = new Image();
      image.src = img;
      image.onload = () => {
        const imgWidth = image.width;
        const imgHeight = image.height;
        const ratio = Math.min(
          (pageWidth - 2 * borderSize) / imgWidth,
          (pageHeight - 2 * borderSize) / imgHeight
        );
        const width = imgWidth * ratio;
        const height = imgHeight * ratio;

        const x = (pageWidth - width) / 2;
        const y = (pageHeight - height) / 2;

        pdf.addImage(img, "JPEG", x, y, width, height, undefined, "FAST", rotation);

        imagesProcessed++;
        if (index < images.length - 1) pdf.addPage();
        if (imagesProcessed === images.length) {
          pdf.save("shaurya.pdf");
        }
      };
    });
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 flex flex-col items-center gap-8">
      {/* Header */}
      <FileImage className="bg-gradient-emerald-cyan text-white rounded-3xl w-24 h-24 p-4" />
      <div className="flex gap-2">
        <h1 className="text-2xl lg:text-5xl font-extrabold text-zinc-900">Image to PDF</h1>
        <h1 className="text-2xl lg:text-5xl font-extrabold bg-gradient-emerald-cyan bg-clip-text text-transparent">Converter</h1>
      </div>
      <p className="text-lg font-semibold text-gray-600 text-center max-w-xl px-4">
        Convert your JPG, PNG, and other image formats to PDF instantly.
      </p>

      {/* Upload Box */}
      <div className="flex flex-col gap-4 items-center justify-center shadow-lg rounded-2xl overflow-hidden w-full max-w-2xl mx-auto bg-white">
        <div className="flex items-center gap-2 bg-emerald-100 w-full p-4 rounded-t-2xl">
          <Upload className="text-emerald-600 w-6 h-6" />
          <p className="text-lg font-semibold">Upload Images</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full px-8 py-10 bg-white">
          <Upload className="bg-emerald-100 text-emerald-800 rounded-2xl w-16 h-16 p-4 shadow-md" />
          <p className="text-lg md:text-xl font-extrabold text-zinc-900 text-center">
            Drag and drop your images here
          </p>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="cursor-pointer p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <p className="text-sm font-medium text-gray-500 text-center">
            Supports JPG, PNG, GIF, BMP, TIFF formats
          </p>
        </div>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full max-w-3xl">
        <div className="flex flex-col items-start">
          <label className="text-sm font-semibold">Border Size (mm)</label>
          <input
            type="number"
            min="0"
            max="50"
            value={borderSize}
            onChange={(e) => setBorderSize(Number(e.target.value))}
            className="border p-2 rounded-md w-full"
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="text-sm font-semibold">Rotation (°)</label>
          <select
            value={rotation}
            onChange={(e) => setRotation(Number(e.target.value))}
            className="border p-2 rounded-md w-full"
          >
            <option value={0}>0°</option>
            <option value={90}>90°</option>
            <option value={180}>180°</option>
            <option value={270}>270°</option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <label className="text-sm font-semibold">Page Orientation</label>
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            className="border p-2 rounded-md w-full"
          >
            <option value="p">Portrait</option>
            <option value="l">Landscape</option>
          </select>
        </div>
      </div>

      {/* Preview Thumbnails */}
      <div className="flex gap-4 flex-wrap justify-center mt-6">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`preview-${idx}`}
            className="w-32 h-32 object-cover rounded shadow"
          />
        ))}
      </div>

      {/* Button */}
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
