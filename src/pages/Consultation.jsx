import React from "react";
import { Box, Button, Center, Flex,  Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Consultation = () => {
  return (
    <Center h="100vh">
      <Box display="block">
        <Box border="2px solid blue" p={10} w={250}>
          <Flex bg="skyblue">
            <Text>STEP3</Text>
            <Text ml={10}>ご相談内容</Text>
          </Flex>
          <textarea width="50%" name="" id="" cols="30" rows="10"></textarea>
        </Box>

        <div>
          <Link to="/questions">
            <button>前へ戻る</button>
          </Link>
          <Link to="/confirmation">
            <button>次へ進む</button>
          </Link>
        </div>

      </Box>
    </Center>
  );
};
