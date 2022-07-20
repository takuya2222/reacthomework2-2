import React from "react";

export const Question1 = (props) => {
  const { setIsHospitalQuestion } = props;

  const displayNextQuestion = () => {
    setIsHospitalQuestion(true);
  };

  return (
    <div>
      <p>現在、生命保険に加入されていますか？</p>
      <label>
        <input
          type="radio"
          name="Q1"
          value="はい"
          onClick={displayNextQuestion}
        />
        はい
      </label>
      <label>
        <input
          type="radio"
          name="Q1"
          value="いいえ"
          onClick={displayNextQuestion}
        />
        いいえ
      </label>
    </div>
  );
};
