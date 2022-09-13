import React, { createContext, useState } from "react";

import { Profile } from "../src/pages/Profile";
import { Questions } from "../src/pages/Questions";
import { Consultation } from "../src/pages/Consultation";
import { Confirmation } from "../src/pages/Confirmation";

export const QuestionContext = createContext();

export const App = () => {
  const [step, setStep] = useState(1);

  const [chooseGender, setChooseGender] = useState();

  const [birth, setBirth] = useState(null);

  const handleChange = (event) => {
    setBirth({ ...birth, [event.target.name]: event.target.value });
  };

  const [selectedQ1, setSelectedQ1] = useState();
  const value = { selectedQ1, setSelectedQ1 };

  const [selectedQ2, setSelectedQ2] = useState();
  const [selectedQ3, setSelectedQ3] = useState();

  const [consultationText, setConsultationText] = useState("");

  return (
    <div>
      {step === 1 && (
        <Profile
          setStep={setStep}
          setChooseGender={setChooseGender}
          setBirth={setBirth}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <QuestionContext.Provider value={value}>
          <Questions
            setStep={setStep}
            setSelectedQ1={setSelectedQ1}
            setSelectedQ2={setSelectedQ2}
            setSelectedQ3={setSelectedQ3}
          />
        </QuestionContext.Provider>
      )}
      {step === 3 && (
        <Consultation
          setStep={setStep}
          consultationText={consultationText}
          setConsultationText={setConsultationText}
        />
      )}
      {step === 4 && (
        <Confirmation
          setStep={setStep}
          chooseGender={chooseGender}
          birth={birth}
          selectedQ1={selectedQ1}
          selectedQ2={selectedQ2}
          selectedQ3={selectedQ3}
          consultationText={consultationText}
        />
      )}
    </div>
  );
};
