import React from "react";

function UseTool({ text, bgcolor, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 ${bgcolor} text-white font-semibold rounded-2xl shadow-md `}
    >
      {text}
    </button>
  );
}

export default UseTool;
