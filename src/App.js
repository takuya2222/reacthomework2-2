import React, { createContext, useState } from "react";

import { Profile } from "../src/pages/Profile";
import { Questions } from "../src/pages/Questions";
import { Consultation } from "../src/pages/Consultation";
import { Confirmation } from "../src/pages/Confirmation";

export const App = () => {
  const Question1Context = createContext();
  const [q1Context, setQ1Context] = useState("");

  const [step, setStep] = useState(1);

  const [chooseGender, setChooseGender] = useState();

  const [birth, setBirth] = useState(null);

  const handleChange = (event) => {
    setBirth({ ...birth, [event.target.name]: event.target.value });
  };

  const [selectedQ1, setSelectedQ1] = useState();
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
        <Question1Context.Provider value={q1Context}>
          <Questions
            setStep={setStep}
            setChooseYesNoQ1={setSelectedQ1}
            setChooseYesNoQ2={setSelectedQ2}
            setChooseYesNoQ3={setSelectedQ3}
          />
        </Question1Context.Provider>
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
          chooseYesNoQ1={selectedQ1}
          chooseYesNoQ2={selectedQ2}
          chooseYesNoQ3={selectedQ3}
          consultationText={consultationText}
        />
      )}
    </div>
  );
};
