import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const checkEmail = (email) => {
  return email.includes("@");
};

const checkPassword = (password) => {
  return password.length >= 8;
};

function SignUp() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setIsEmailValid(checkEmail(e.target.value));
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
    setIsPasswordValid(checkPassword(e.target.value));
  };
  const onSubmitHandler = (e) => {};

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={onSubmitHandler}>
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
          <Button
            text="회원가입"
            testId="signup-button"
            disabled={isEmailValid && isPasswordValid ? false : true}
          />
        </Wrapper>
      </form>
    </div>
  );
}

export default SignUp;
