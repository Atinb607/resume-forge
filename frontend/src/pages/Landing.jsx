import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Resume Builder</h1>
      <p className="mb-6 text-lg text-gray-600">Create your professional resume in minutes.</p>
      <Link to="/build">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Start Building
        </button>
      </Link>
    </div>
  );
}
