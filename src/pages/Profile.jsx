import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

export const Profile = (props) => {
  const { setStep, setChooseGender, setBirth, handleChange } = props;
  const birthYearRef = useRef(null);
  const birthMonthRef = useRef(null);
  const birthDayRef = useRef(null);

  const setYear = () => {
    for (let i = 1920; i <= new Date().getFullYear(); i++) {
      const option = document.createElement("option");
      option.value = `${i}`;
      option.text = `${i}`;
      birthYearRef.current.appendChild(option);
    }
  };

  const setMonth = () => {
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      birthMonthRef.current.appendChild(option);
    }
  };

  const setDay = () => {
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      birthDayRef.current.appendChild(option);
    }
  };

  useEffect(() => {
    setYear();
    setMonth();
    setDay();
  }, []);

  return (
    <Center h="100vh">
      <div>
        <Box border="2px solid blue" p={10} w={500}>
          <Flex bg="skyblue">
            <Text>STEP1</Text>
            <Text ml={10}>お客様の情報を入力してください</Text>
          </Flex>
          <p>性別</p>
          <label htmlFor="">
            <input type="radio" name="sex" onChange={setChooseGender("男性")} />
            男性
          </label>
          <label htmlFor="">
            <input type="radio" name="sex" onChange={setChooseGender("女性")} />
            女性
          </label>

          <p>生年月日</p>
          <label>
            <select
              ref={birthYearRef}
              value={setBirth.year}
              onChange={handleChange}
              name="year"
            ></select>
            年
          </label>
          <label>
            <select
              ref={birthMonthRef}
              value={setBirth.month}
              onChange={handleChange}
              name="month"
            ></select>
            月
          </label>
          <label>
            <select
              ref={birthDayRef}
              value={setBirth.day}
              onChange={handleChange}
              name="day"
            ></select>
            日
          </label>
        </Box>

        <div>
          <button onClick={() => setStep(2)}>次へ進む</button>
        </div>
      </div>
    </Center>
  );
};
