import React from "react";
import { Construction } from "lucide-react"; 

function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <Construction className="w-16 h-16 text-yellow-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">This Tool is Under Construction</h1>
      <p className="text-gray-700 text-lg mb-4">
        We're working hard to bring this feature to you.
      </p>
      <p className="text-gray-600">You'll be able to use this tool very soon. Stay tuned!</p>
    </div>
  );
}

export default UnderConstruction;
