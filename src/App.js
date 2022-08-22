import React, { useState } from "react";

import { Profile } from "../src/pages/Profile";
import { Questions } from "../src/pages/Questions";
import { Consultation } from "../src/pages/Consultation";
import { Confirmation } from "../src/pages/Confirmation";

export const App = () => {
  const [step, setStep] = useState(1);

  const [chooseGender, setChooseGender] = useState();

  const [birth, setBirth] = useState({ year: null, month: null, day: null });

  const handleChange = (event) => {
    setBirth({ ...birth, [event.target.name]: event.target.value });
  };

  const [chooseYesNoQ1, setChooseYesNoQ1] = useState();
  const [chooseYesNoQ2, setChooseYesNoQ2] = useState();
  const [chooseYesNoQ3, setChooseYesNoQ3] = useState();

  const [consultationText, setConsultationText] = useState();

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
        <Questions
          setStep={setStep}
          setChooseYesNoQ1={setChooseYesNoQ1}
          setChooseYesNoQ2={setChooseYesNoQ2}
          setChooseYesNoQ3={setChooseYesNoQ3}
        />
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
          chooseYesNoQ1={chooseYesNoQ1}
          chooseYesNoQ2={chooseYesNoQ2}
          chooseYesNoQ3={chooseYesNoQ3}
          consultationText={consultationText}
        />
      )}
    </div>
  );
};
