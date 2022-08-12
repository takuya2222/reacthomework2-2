import React, { useState } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

export const Consultation = (props) => {
  const { setStep } = props;
  const [consultation, setConsultation] = useState();
  const onChangeText = (e) => setConsultation(e.target.value);
  const onClickAdd = () => {};

  return (
    <Center h="100vh">
      <Box display="block">
        <Box border="2px solid blue" p={10} w={250}>
          <Flex bg="skyblue">
            <Text>STEP3</Text>
            <Text ml={10}>ご相談内容</Text>
          </Flex>
          <textarea
            width="50%"
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={onChangeText}
            value={consultation}
          ></textarea>
        </Box>

        <div>
          <button onClick={() => setStep(2)}>前へ戻る</button>
          <button
            onClick={() => {
              setStep(4);
              onChangeText();
            }}
          >
            次へ進む
          </button>
        </div>
      </Box>
    </Center>
  );
};
