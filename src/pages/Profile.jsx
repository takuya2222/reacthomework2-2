import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  const birthYearRef = useRef(null);
  const birthMonthRef = useRef(null);
  const birthDayRef = useRef(null);

  const [birthYear, setBirthYear] = useState();
  const [birthMonth, setBirthMonth] = useState();
  const [birthDay, setBirthDay] = useState();

  const setYear = () => {
    for (let i = 1920; i <= new Date().getFullYear(); i++) {
      const option = document.createElement("option");
      const date = new Date(Date.UTC(i));
      const jc = new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
        year: "numeric",
      }).format(date);
      option.value = `${i}（${jc}）`;
      option.text = `${i}（${jc}）`;
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

  const selectBirthYear = (e) => {
    setBirthYear(e.target.value);
  };

  const selectBirthMonth = (e) => {
    setBirthMonth(e.target.value);
  };

  const selectBirthDay = (e) => {
    setBirthDay(e.target.value);
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
          <input type="radio" name="sex" />
          <label htmlFor="">男性</label>
          <input type="radio" name="sex" />
          <label htmlFor="">女性</label>

          <p>生年月日</p>
          <label>
            <select
              ref={birthYearRef}
              value={birthYear}
              onChange={selectBirthYear}
            ></select>
            年
          </label>
          <label>
            <select
              ref={birthMonthRef}
              value={birthMonth}
              onChange={selectBirthMonth}
            ></select>
            月
          </label>
          <label>
            <select
              ref={birthDayRef}
              value={birthDay}
              onChange={selectBirthDay}
            ></select>
            日
          </label>
        </Box>

        <div>
          <Link to="/questions">
            <button>次へ進む</button>
          </Link>
        </div>
      </div>
    </Center>
  );
};
