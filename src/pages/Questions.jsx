import React, { useState } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

import { Question1 } from "../components/Question1";
import { Question2 } from "../components/Question2";
import { Question3 } from "../components/Question3";

export const Questions = (props) => {
  const { setStep, setChooseYesNoQ1, setChooseYesNoQ2, setChooseYesNoQ3 } =
    props;
  const [isHospitalQuestion, setIsHospitalQuestion] = useState(false);
  const [isOperationQuestion, setIsOperationQuestion] = useState(false);

  return (
    <Center h="100vh">
      <Box display="block">
        <Box border="2px solid blue" p={10} w={500}>
          <Flex bg="skyblue" br={3} borderRadius={3}>
            <Text>STEP2</Text>
            <Text ml={10}>以下にお答えください</Text>
          </Flex>

          <div>
            <Question1
              setIsHospitalQuestion={setIsHospitalQuestion}
              setChooseYesNoQ1={setChooseYesNoQ1}
            />
            {isHospitalQuestion && (
              <Question2
                setIsOperationQuestion={setIsOperationQuestion}
                setChooseYesNoQ2={setChooseYesNoQ2}
              />
            )}
            {isOperationQuestion && (
              <Question3 setChooseYesNoQ3={setChooseYesNoQ3} />
            )}
          </div>
        </Box>

        <div>
          <button onClick={() => setStep(1)}>前へ戻る</button>
          <button onClick={() => setStep(3)}>次へ進む</button>
        </div>
      </Box>
    </Center>
  );
};
