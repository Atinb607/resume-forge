import { useState } from "react";
import { ResumeContext } from "./ResumeContext.js";

export const ResumeProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personal: { name: "", email: "", phone: "", linkedin: "", portfolio: "" },
    education: [],
    experience: [],
    skills: [],
    summary: "",
    template: ""
  });

  return (
    <ResumeContext.Provider value={{ formData, setFormData }}>
      {children}
    </ResumeContext.Provider>
  );
};
