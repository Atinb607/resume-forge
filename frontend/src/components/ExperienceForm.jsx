import { useContext, useState } from "react";
import { ResumeContext } from "../context/ResumeContext";

export default function ExperienceForm({ nextStep, prevStep }) {
  const { formData, setFormData } = useContext(ResumeContext);
  const [exp, setExp] = useState({ title: "", company: "", years: "" });

  const handleAdd = () => {
    if (!exp.title || !exp.company || !exp.years) return;
    setFormData({
      ...formData,
      experience: [...formData.experience, exp]
    });
    setExp({ title: "", company: "", years: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={exp.title}
        onChange={(e) => setExp({ ...exp, title: e.target.value })}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="text"
        placeholder="Company"
        value={exp.company}
        onChange={(e) => setExp({ ...exp, company: e.target.value })}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="text"
        placeholder="Years"
        value={exp.years}
        onChange={(e) => setExp({ ...exp, years: e.target.value })}
        className="w-full p-2 border rounded mb-3"
      />

      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
      >
        Add Experience
      </button>

      <div className="mt-4">
        {formData.experience.map((ex, index) => (
          <p key={index} className="border-b py-1">
            {ex.title} - {ex.company} ({ex.years})
          </p>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
