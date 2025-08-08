import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResumeProvider } from "./context/ResumeProvider";
import Landing from "./pages/Landing";
import MultiStepForm from "./pages/MultiStepForm";
import Preview from "./pages/Preview";

export default function App() {
  return (
    <BrowserRouter>
      <ResumeProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/build" element={<MultiStepForm />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </ResumeProvider>
    </BrowserRouter>
  );
}
