import { useContext, useState, useRef } from "react";
import { ResumeContext } from "../context/ResumeContext";
import ResumeTemplate from "../components/ResumeTemplates";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Preview() {
  const { formData, setFormData } = useContext(ResumeContext);
  const [selectedTemplate, setSelectedTemplate] = useState(formData.template || "classic");
  const resumeRef = useRef();

  const templates = ["classic", "modern", "minimal", "elegant", "bold", "creative"];

  const downloadPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save("resume.pdf");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>

      {/* Template Selector */}
      <div className="flex flex-wrap gap-3 mb-6">
        {templates.map((t) => (
          <button
            key={t}
            onClick={() => {
              setSelectedTemplate(t);
              setFormData({ ...formData, template: t });
            }}
            className={`px-3 py-1 rounded border ${
              selectedTemplate === t
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Resume */}
      <div ref={resumeRef}>
        <ResumeTemplate formData={formData} template={selectedTemplate} />
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
