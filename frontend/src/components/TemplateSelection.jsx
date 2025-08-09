import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { useNavigate } from "react-router-dom";
import TemplatePreview from "../components/TemplatePreview";

export default function TemplateSelection({ prevStep }) {
  const { formData, setFormData } = useContext(ResumeContext);
  const navigate = useNavigate();

  const templates = ["classic", "modern", "minimal", "elegant", "bold"];

  const selectTemplate = (templateName) => {
    setFormData({ ...formData, template: templateName });
    navigate("/preview");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Choose a Template</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {templates.map((t) => (
          <TemplatePreview
            key={t}
            data={formData}
            template={t}
            selected={formData.template === t}
            onClick={() => selectTemplate(t)}
          />
        ))}
      </div>

      <div className="mt-8 flex gap-4">
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
