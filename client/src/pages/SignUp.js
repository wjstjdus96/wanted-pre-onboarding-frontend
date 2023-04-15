import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

function SignUp() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const emailChangeHandler = () => {};
  const passwordChangeHandler = () => {};

  return (
    <div>
      <h2>회원가입</h2>
      <Wrapper>
        <Input
          label="이메일"
          testId="email-input"
          placeholder="ex) abc@naver.com"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <Input
          label="비밀번호"
          testId="password-input"
          placeholder="8자 이상 입력하세요"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <Button text="회원가입" testId="signup-button" />
      </Wrapper>
    </div>
  );
}

export default SignUp;
