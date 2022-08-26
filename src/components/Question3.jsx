import React from "react";

export const Question3 = (props) => {
  const { setSelectedQ3 } = props;
  return (
    <div>
      <p>
        過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？
      </p>
      <label>
        <input
          type="radio"
          name="Q3"
          value="はい"
          onChange={() => setSelectedQ3(true)}
        />
        はい
      </label>
      <label>
        <input
          type="radio"
          name="Q3"
          value="いいえ"
          onChange={() => setSelectedQ3(false)}
        />
        いいえ
      </label>
    </div>
  );
};
