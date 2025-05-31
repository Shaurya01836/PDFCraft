import React, { useState } from "react";
import jsPDF from "jspdf";
import { FileImage, Upload } from "lucide-react";
import ToolHeader from "../components/ToolHeader";
import UploadBox from "../components/UploadBox";
import SettingControl from "../components/SettingControl";
import PreviewCard from "../components/PreviewCard";
import PrimaryButton from "../components/PrimaryButton";

function ImageToPdf() {
  const [images, setImages] = useState([]);
  const [borderSize, setBorderSize] = useState(0); // in mm
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

        pdf.addImage(
          img,
          "JPEG",
          x,
          y,
          width,
          height,
          undefined,
          "FAST",
          rotation
        );

        imagesProcessed++;
        if (index < images.length - 1) pdf.addPage();
        if (imagesProcessed === images.length) {
          pdf.save("PDFCraft.pdf");
        }
      };
    });
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 flex flex-col items-center gap-8">
      <ToolHeader
        icon={FileImage}
        title="Image to PDF"
        subtitle="Convert your JPG, PNG, and other image formats to PDF instantly."
      />

      <UploadBox
        label="Upload Images"
        icon={Upload}
        onUpload={handleImageUpload}
        accept="image/*"
      />
      <div className="flex gap-4">
        <SettingControl label="📏 Border Size (mm)">
          <input
            type="number"
            value={borderSize}
            onChange={(e) => setBorderSize(Number(e.target.value))}
            className="border px-2 py-1 rounded"
          />
        </SettingControl>
        <SettingControl label="📐 Page Orientation">
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                value="p"
                checked={orientation === "p"}
                onChange={() => setOrientation("p")}
              />
              Portrait
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                value="l"
                checked={orientation === "l"}
                onChange={() => setOrientation("l")}
              />
              Landscape
            </label>
          </div>
        </SettingControl>
      </div>

      {images.length > 0 && (
        <PreviewCard
          src={images[0]}
          rotation={rotation}
          borderSize={borderSize}
          orientation={orientation}
        />
      )}

      <PrimaryButton label="Convert to PDF" onClick={generatePDF} />
    </div>
  );
}

export default ImageToPdf;
