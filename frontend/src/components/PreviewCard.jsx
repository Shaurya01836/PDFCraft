import React from "react";

function PreviewCard({ src, rotation = 0, borderSize = 0, orientation = "p" }) {
  const width = orientation === "p" ? 210 : 297;
  const height = orientation === "p" ? 297 : 210;
  return (
    <div
      className="relative border border-dashed border-gray-300 shadow bg-white flex items-center justify-center"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        padding: `${borderSize}px`,
        boxSizing: "border-box",
      }}
    >
      <img
        src={src}
        alt="preview"
        className="object-contain max-w-full max-h-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.3s, padding 0.3s",
        }}
      />
    </div>
  );
}

export default PreviewCard;
