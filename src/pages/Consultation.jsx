import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

export const Consultation = (props) => {
  const { setStep, setConsultationText } = props;

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
            onChange={(e) => setConsultationText(e.target.value)}
            // value={consultationText}
          ></textarea>
        </Box>

        <div>
          <button onClick={() => setStep(2)}>前へ戻る</button>
          <button
            onClick={() => {
              setStep(4);
            }}
          >
            次へ進む
          </button>
        </div>
      </Box>
    </Center>
  );
};
