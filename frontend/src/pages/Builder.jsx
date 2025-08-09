import { useContext, useState } from "react";
import { ResumeContext } from "../context/ResumeContext";
import ResumeTemplate from "../components/ResumeTemplates";

export default function Builder() {
  const { formData, setFormData } = useContext(ResumeContext);
  const [step, setStep] = useState(1);
  const templates = ["classic", "modern", "minimal", "elegant", "bold", "creative"];

  const updateField = (section, key, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [key]: value
      }
    });
  };

  return (
    <div className="flex h-screen">
      {/* LEFT: Form */}
      <div className="w-1/2 bg-gray-50 p-6 overflow-y-auto">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Personal Information</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.personal.name || ""}
              onChange={(e) => updateField("personal", "name", e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.personal.email || ""}
              onChange={(e) => updateField("personal", "email", e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Phone"
              value={formData.personal.phone || ""}
              onChange={(e) => updateField("personal", "phone", e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <textarea
              placeholder="Write a brief summary..."
              value={formData.summary || ""}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Template</h2>
            <div className="grid grid-cols-2 gap-3">
              {templates.map((t) => (
                <button
                  key={t}
                  onClick={() => setFormData({ ...formData, template: t })}
                  className={`p-2 border rounded ${
                    formData.template === t ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* RIGHT: Live Preview */}
      <div className="w-1/2 p-6 overflow-y-auto bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Live Preview</h2>
        <ResumeTemplate
          formData={formData}
          template={formData.template || "classic"}
        />
      </div>
    </div>
  );
}
