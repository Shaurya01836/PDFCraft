import React from "react";

function PrimaryButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
