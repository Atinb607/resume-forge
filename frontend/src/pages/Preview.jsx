import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Preview() {
  const { formData } = useContext(ResumeContext);

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Apply template style
    const applyStyle = () => {
      if (formData.template === "classic") {
        doc.setFont("times", "normal");
        doc.setTextColor(0, 0, 0);
      }
      if (formData.template === "modern") {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(33, 150, 243); // blue
      }
      if (formData.template === "minimal") {
        doc.setFont("courier", "normal");
        doc.setTextColor(80, 80, 80); // gray
      }
    };

    applyStyle();
    doc.setFontSize(20);
    doc.text(formData.personal.name || "Your Name", 14, 20);

    doc.setFontSize(11);
    doc.text(
      `${formData.personal.email || ""} | ${formData.personal.phone || ""}`,
      14,
      28
    );
    doc.text(
      `${formData.personal.linkedin || ""} | ${formData.personal.portfolio || ""}`,
      14,
      34
    );

    doc.setFontSize(14);
    doc.text("Summary", 14, 48);
    doc.setFontSize(11);
    doc.text(formData.summary || "", 14, 54, { maxWidth: 180 });

    if (formData.education.length > 0) {
      doc.autoTable({
        startY: 70,
        head: [["Degree", "School", "Year"]],
        body: formData.education.map((ed) => [ed.degree, ed.school, ed.year]),
        styles: {
          font: formData.template === "modern" ? "helvetica" : "times",
          textColor: formData.template === "modern" ? [33, 150, 243] : 0,
        },
      });
    }

    if (formData.experience.length > 0) {
      doc.autoTable({
        startY: doc.lastAutoTable.finalY + 10,
        head: [["Job Title", "Company", "Years"]],
        body: formData.experience.map((ex) => [ex.title, ex.company, ex.years]),
        styles: {
          font: formData.template === "modern" ? "helvetica" : "times",
          textColor: formData.template === "modern" ? [33, 150, 243] : 0,
        },
      });
    }

    if (formData.skills.length > 0) {
      doc.setFontSize(14);
      doc.text(
        "Skills",
        14,
        doc.lastAutoTable ? doc.lastAutoTable.finalY + 20 : 70
      );
      doc.setFontSize(11);
      doc.text(
        formData.skills.join(", "),
        14,
        doc.lastAutoTable ? doc.lastAutoTable.finalY + 26 : 76,
        { maxWidth: 180 }
      );
    }

    doc.save(`${formData.personal.name || "resume"}.pdf`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{formData.personal.name}</h1>
      <p>{formData.personal.email} | {formData.personal.phone}</p>
      <p>{formData.personal.linkedin} | {formData.personal.portfolio}</p>

      <h2 className="text-xl font-semibold mt-6">Summary</h2>
      <p>{formData.summary}</p>

      <h2 className="text-xl font-semibold mt-6">Education</h2>
      {formData.education.map((ed, i) => (
        <p key={i}>{ed.degree} - {ed.school} ({ed.year})</p>
      ))}

      <h2 className="text-xl font-semibold mt-6">Experience</h2>
      {formData.experience.map((ex, i) => (
        <p key={i}>{ex.title} - {ex.company} ({ex.years})</p>
      ))}

      <h2 className="text-xl font-semibold mt-6">Skills</h2>
      <p>{formData.skills.join(", ")}</p>

      <div className="mt-6 p-4 border rounded">
        <p className="font-bold">Template Selected:</p>
        <p>{formData.template}</p>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download PDF
      </button>
    </div>
  );
}
