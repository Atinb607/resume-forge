import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

export default function SummaryForm({ nextStep, prevStep }) {
  const { formData, setFormData } = useContext(ResumeContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
      <textarea
        placeholder="Write a short summary about yourself"
        value={formData.summary}
        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
        className="w-full p-2 border rounded mb-3 h-32"
      />

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
