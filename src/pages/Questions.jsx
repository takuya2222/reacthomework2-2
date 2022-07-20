import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

import { Question1 } from "../components/Question1";
import { Question2 } from "../components/Question2";
import { Question3 } from "../components/Question3";

export const Questions = () => {
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
            <Question1 setIsHospitalQuestion={setIsHospitalQuestion} />
            {isHospitalQuestion && (
              <Question2 setIsOperationQuestion={setIsOperationQuestion} />
            )}
            {isOperationQuestion && <Question3 />}
          </div>
        </Box>

        <div>
          <Link to="/">
            <button>前へ戻る</button>
          </Link>
          <Link to="/consultation">
            <button>次へ進む</button>
          </Link>
        </div>
      </Box>
    </Center>
  );
};
