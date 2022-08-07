import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addText } from "../features/Texts";
// import { useState } from "react";

export const Consultation = () => {
  // const [text, setText] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addText);
  };

  return (
    <Center h="100vh">
      <Box display="block">
        <Box border="2px solid blue" p={10} w={250}>
          <Flex bg="skyblue">
            <Text>STEP3</Text>
            <Text ml={10}>ご相談内容</Text>
          </Flex>
          <textarea
            // onChange={(e) => setText(e.target.value)}
            width="50%"
            name=""
            id=""
            cols="30"
            rows="10"
          >
            {/* {post.text} */}
          </textarea>
        </Box>

        <div>
          <Link to="/questions">
            <button>前へ戻る</button>
          </Link>
          <Link to="/Confirmation">
            <button>次へ進む</button>
          </Link>
        </div>
      </Box>
    </Center>
  );
};
