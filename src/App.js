import React, { useState } from "react";

import { Profile } from "../src/pages/Profile";
import { Questions } from "../src/pages/Questions";
import { Consultation } from "../src/pages/Consultation";
import { Confirmation } from "../src/pages/Confirmation";

export const App = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <Profile setStep={setStep} />}
      {step === 2 && <Questions setStep={setStep} />}
      {step === 3 && <Consultation setStep={setStep} />}
      {step === 4 && <Confirmation setStep={setStep} />}
    </div>
  );
};
