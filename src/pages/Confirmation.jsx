import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { QuestionContext } from "../App";

export const Confirmation = (props) => {
  const {
    setStep,
    chooseGender,
    birth,
    selectedQ2,
    selectedQ3,
    consultationText,
  } = props;

  const { selectedQ1 } = useContext(QuestionContext);

  return (
    <Center>
      <Box>
        <Box border="2px solid blue" p={10} w={500}>
          <Flex bg="skyblue">
            <Text>STEP3</Text>
            <Text ml={10}>-ご相談内容-</Text>
          </Flex>
          <div>
            <p>-性別-</p>
            <p>{chooseGender}</p>
            <p>-生年月日-</p>
            <p>
              {birth.year}年{birth.month}月{birth.day}日
            </p>
            <p>-現在、生命保険に加入されていますか？-</p>
            <p>{selectedQ1 ? "はい" : "いいえ"}</p>
            <p>
              -現在、入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？-
            </p>
            <p>{selectedQ2 ? "はい" : "いいえ"}</p>
            <p>
              -過去5年院内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-
            </p>
            <p>{selectedQ3 ? "はい" : "いいえ"}</p>
            <p>-ご相談内容-</p>
            <p>{consultationText}</p>
          </div>
        </Box>
        <Box>
          <button onClick={() => setStep(3)}>前へ戻る</button>
          <button onClick={() => setStep(1)}>送信</button>
        </Box>
      </Box>
    </Center>
  );
};
