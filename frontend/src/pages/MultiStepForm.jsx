import { useState } from "react";
import PersonalInfoForm from "../components/PersonalInfoForm";
import EducationForm from "../components/EducationForm";
import ExperienceForm from "../components/ExperienceForm";
import SkillsForm from "../components/SkillsForm";
import SummaryForm from "../components/SummaryForm";
import TemplateSelection from "../components/TemplateSelection";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {step === 1 && <PersonalInfoForm nextStep={nextStep} />}
      {step === 2 && <EducationForm nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <ExperienceForm nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <SkillsForm nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <SummaryForm nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <TemplateSelection prevStep={prevStep} />}
    </div>
  );
}
