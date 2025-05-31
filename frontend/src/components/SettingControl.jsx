import React from "react";

function SettingControl({ label, children }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2 transition hover:shadow-md">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
}

export default SettingControl;
