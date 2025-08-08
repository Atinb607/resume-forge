import { useContext, useState } from "react";
import { ResumeContext } from "../context/ResumeContext";

export default function SkillsForm({ nextStep, prevStep }) {
  const { formData, setFormData } = useContext(ResumeContext);
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill]
      });
      setSkill("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <input
        type="text"
        placeholder="Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <button onClick={addSkill} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2">
        Add
      </button>
      <div className="mt-4">
        {formData.skills.map((s, i) => (
          <p key={i} className="text-gray-700">{s}</p>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white rounded">Back</button>
        <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
      </div>
    </div>
  );
}
