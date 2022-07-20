import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Question1 } from "../components/Question1";
import { Question2 } from "../components/Question2";
import { Question3 } from "../components/Question3";

export const Questions = () => {
  // const [isLifeInsurance, setIsLifeInsurance] = useState(false);
  const [isHospitalQuestion, setIsHospitalQuestion] = useState(false);
  const [isOperationQuestion, setIsOperationQuestion] = useState(false);

  return (
    <div>
      <div>
        <p>STEP2</p>
        <p>以下にお答えください</p>
      </div>

      <div>
        <Question1 setIsHospitalQuestion={setIsHospitalQuestion} />
        {isHospitalQuestion && <Question2 setIsOperationQuestion={setIsOperationQuestion} />}
        {isOperationQuestion && <Question3 setIsOperationQuestion={setIsOperationQuestion} />}
      </div>

      <Link to="/">
        <button>前へ戻る</button>
      </Link>
      <Link to="/consultation">
        <button>次へ進む</button>
      </Link>
    </div>
  );
};
