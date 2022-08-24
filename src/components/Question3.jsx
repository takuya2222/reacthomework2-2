import React from "react";
import { Center } from "@chakra-ui/react";

export const Question3 = (props) => {
  const { setChooseYesNoQ3 } = props;
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
          onChange={() => setChooseYesNoQ3(true)}
        />
        はい
      </label>
      <label>
        <input
          type="radio"
          name="Q3"
          value="いいえ"
          onChange={() => setChooseYesNoQ3(false)}
        />
        いいえ
      </label>
    </div>
  );
};
