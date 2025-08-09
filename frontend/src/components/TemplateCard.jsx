export default function TemplateCard({ name, selected, onClick }) {
  const previewStyles = {
    classic: "font-serif text-black",
    modern: "font-sans text-blue-600",
    minimal: "font-mono text-gray-700",
    elegant: "font-serif text-purple-600",
    bold: "font-sans text-red-600"
  };

  return (
    <div
      onClick={onClick}
      className={`border rounded-lg p-4 cursor-pointer hover:shadow-lg transition ${
        selected ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-300"
      }`}
    >
      <div className={`p-4 bg-white h-40 overflow-hidden ${previewStyles[name]}`}>
        <p className="text-lg font-bold">{name.toUpperCase()} Template</p>
        <div className="mt-2 text-sm">
          <p>John Doe</p>
          <p>johndoe@email.com</p>
          <p>+123 456 789</p>
          <p>LinkedIn | Portfolio</p>
        </div>
      </div>
      <p className="text-center mt-2 font-medium">{name}</p>
    </div>
  );
}
