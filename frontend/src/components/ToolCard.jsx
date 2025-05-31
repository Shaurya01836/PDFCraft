import { useNavigate } from "react-router-dom";
import UseTool from "./UseTool";

const availableRoutes = {
  "Image to PDF": "/image-to-pdf",
  "PDF to Word": "/pdf-to-word",
  "PDF to Excel": "/pdf-to-excel",
  "PDF to PPT": "/pdf-to-ppt",
  "PDF to Image": "/pdf-to-image",
  "Merge PDFs": "/merge-pdf",
  "Split PDFs": "/split-pdf",
  "Rotate Pages": "/rotate-pages",
  "Delete Pages": "/delete-pages",
  "Edit PDF": "/edit-pdf",
};

function ToolCard({ icon: Icon, title, description, gradient }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const route = availableRoutes[title];
    if (route) {
      navigate(route);
    } else {
      navigate("/under-construction");
    }
  };

  return (
    <div className="group rounded-xl w-60 px-4 py-5 flex flex-col items-center gap-4 bg-white shadow-md transition-all duration-300 hover:scale-105">
      <Icon className={`w-20 h-20 ${gradient} text-white rounded-2xl px-4`} />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-sm text-center text-gray-700">{description}</p>
      <UseTool text="Use Tool" bgcolor={gradient} onClick={handleClick} />
    </div>
  );
}

export default ToolCard;
