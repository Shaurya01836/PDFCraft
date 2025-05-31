import React from "react";

function ToolHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Icon className="bg-gradient-emerald-cyan text-white rounded-3xl w-24 h-24 p-4" />
      <div className="flex gap-2">
        <h1 className="text-2xl lg:text-5xl font-extrabold text-zinc-900">
          {title}
        </h1>
        <h1 className="text-2xl lg:text-5xl font-extrabold bg-gradient-emerald-cyan bg-clip-text text-transparent">
          Tool
        </h1>
      </div>
      <p className="text-lg font-semibold text-gray-600 text-center max-w-xl px-4">
        {subtitle}
      </p>
    </div>
  );
}

export default ToolHeader;
