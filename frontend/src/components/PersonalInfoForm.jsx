import { useContext, useState } from "react";
import { ResumeContext } from "../context/ResumeContext";

export default function SkillsForm({ nextStep, prevStep }) {
  const { formData, setFormData } = useContext(ResumeContext);
  const [skill, setSkill] = useState("");

  const handleAdd = () => {
    if (!skill.trim()) return;
    setFormData({
      ...formData,
      skills: [...formData.skills, skill]
    });
    setSkill("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <input
        type="text"
        placeholder="Enter a skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
      >
        Add Skill
      </button>

      <div className="mt-4">
        {formData.skills.map((sk, index) => (
          <span key={index} className="inline-block px-3 py-1 bg-gray-200 rounded mr-2">
            {sk}
          </span>
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
