import React from "react";

function UploadBox({ label, icon: Icon, onUpload, accept }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center shadow-lg rounded-2xl w-full max-w-2xl mx-auto bg-white overflow-hidden">
      <div className="flex items-center gap-2 bg-emerald-100 w-full p-4 rounded-t-2xl">
        <Icon className="text-emerald-600 w-6 h-6" />
        <p className="text-lg font-semibold">{label}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full px-8 py-10 bg-white">
        <Icon className="bg-emerald-100 text-emerald-800 rounded-2xl w-16 h-16 p-4 shadow-md" />
        <p className="text-lg md:text-xl font-extrabold text-zinc-900 text-center">
          Drag and drop your files here
        </p>
        <input
          type="file"
          accept={accept}
          multiple
          onChange={onUpload}
          className="cursor-pointer p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <p className="text-sm font-medium text-gray-500 text-center">
          Supports: {accept}
        </p>
      </div>
    </div>
  );
}

export default UploadBox;
