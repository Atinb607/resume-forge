import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function TemplatePreview({ data, template, onClick, selected }) {
  const previewRef = useRef();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (previewRef.current) {
      html2canvas(previewRef.current, { scale: 0.4 }).then((canvas) => {
        setImage(canvas.toDataURL("image/png"));
      });
    }
  }, [template, data]);

  const templateClasses = {
    classic: "font-serif text-black",
    modern: "font-sans text-blue-600",
    minimal: "font-mono text-gray-700",
    elegant: "font-serif text-purple-600",
    bold: "font-sans text-red-600"
  };

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border rounded-lg p-2 hover:shadow-lg transition ${
        selected ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-300"
      }`}
    >
      {/* Thumbnail Image */}
      {image ? (
        <img src={image} alt={`${template} preview`} className="w-full h-40 object-cover" />
      ) : (
        <div className="w-full h-40 bg-gray-200 animate-pulse" />
      )}

      <p className="text-center mt-2 capitalize">{template}</p>

      {/* Hidden Full Template HTML */}
      <div
        ref={previewRef}
        className={`w-[600px] p-4 bg-white ${templateClasses[template]}`}
        style={{ position: "absolute", top: "-9999px", left: "-9999px" }}
      >
        <h1 className="text-2xl font-bold">{data.personal.name || "Your Name"}</h1>
        <p>{data.personal.email} | {data.personal.phone}</p>
        <p>{data.personal.linkedin} | {data.personal.portfolio}</p>

        <h2 className="mt-4 font-bold">Summary</h2>
        <p className="text-sm">{data.summary || "A short professional summary..."}</p>

        <h2 className="mt-3 font-bold">Education</h2>
        {data.education.length > 0 ? (
          data.education.map((ed, i) => (
            <p key={i} className="text-sm">{ed.degree} - {ed.school} ({ed.year})</p>
          ))
        ) : (
          <p className="text-sm">Degree - School (Year)</p>
        )}

        <h2 className="mt-3 font-bold">Experience</h2>
        {data.experience.length > 0 ? (
          data.experience.map((ex, i) => (
            <p key={i} className="text-sm">{ex.title} - {ex.company} ({ex.years})</p>
          ))
        ) : (
          <p className="text-sm">Job Title - Company (Years)</p>
        )}

        <h2 className="mt-3 font-bold">Skills</h2>
        <p className="text-sm">{data.skills.length > 0 ? data.skills.join(", ") : "Skill 1, Skill 2"}</p>
      </div>
    </div>
  );
}
