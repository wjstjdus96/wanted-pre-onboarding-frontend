import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import styled from "styled-components";
import { requestSignUp } from "../apis/auth";
import { useNavigate } from "react-router-dom";
import { RES_MESSAGE, SIGN_UP } from "../constants/const";
import { checkEmail, checkPassword } from "../utils/checkValid";
import { checkToken } from "../utils/checkToken";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

function SignUp() {
  const navigate = useNavigate();
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
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const info = { email: enteredEmail, password: enteredPassword };
    requestSignUp(info).then((res) => {
      alert(RES_MESSAGE.SUCCESS(SIGN_UP));
      if (res.status == 201) {
        return navigate("/signin", { replace: true });
      }
    });
  };

  useEffect(() => {
    if (checkToken()) {
      navigate("/todo");
    }
  }, []);

  return (
    <div>
      <h2>{SIGN_UP}</h2>
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
            text={SIGN_UP}
            testId="signup-button"
            disabled={isEmailValid && isPasswordValid ? false : true}
          />
        </Wrapper>
      </form>
    </div>
  );
}

export default SignUp;
