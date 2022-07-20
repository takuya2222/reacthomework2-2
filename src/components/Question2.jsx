import React from "react";

export const Question2 = (props) => {
  const { setIsOperationQuestion } = props;

  const displayNextQuestion = () => {
    setIsOperationQuestion(true);
  };

  return (
    <div>
      <p>
        現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
      </p>
      <label>
        <input
          type="radio"
          name="Q2"
          value="はい"
          onClick={displayNextQuestion}
        />
        はい
      </label>
      <label>
        <input
          type="radio"
          name="Q2"
          value="いいえ"
          onClick={displayNextQuestion}
        />
        いいえ
      </label>
    </div>
  );
};
