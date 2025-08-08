import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { useNavigate } from "react-router-dom";

export default function TemplateSelection({ prevStep }) {
  const { formData, setFormData } = useContext(ResumeContext);
  const navigate = useNavigate();

  const selectTemplate = (templateName) => {
    setFormData({ ...formData, template: templateName });
    navigate("/preview");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Choose a Template</h2>
      <div className="grid grid-cols-3 gap-4">
        {["classic", "modern", "minimal"].map((t) => (
          <div
            key={t}
            onClick={() => selectTemplate(t)}
            className={`p-4 border rounded cursor-pointer ${
              formData.template === t ? "border-blue-500" : ""
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)} Style
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back
        </button>
      </div>
    </div>
  );
}
