import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import styled from "styled-components";
import { requestSignIn, requestSignUp } from "../apis/auth";
import { useNavigate } from "react-router-dom";
import {
  EMAIL_MES,
  PASSWORD_MES,
  RES_MESSAGE,
  SIGN_IN,
  SIGN_UP,
  TOKEN_KEY,
} from "../constants/const";
import { checkEmail, checkPassword } from "../utils/checkValid";
import { checkToken } from "../utils/checkToken";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  input {
    margin-bottom: 23px;
  }
`;

function Login() {
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
    requestSignIn(info)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          localStorage.setItem(TOKEN_KEY, res.data.access_token);
          navigate("/todo", { replace: true });
        }
      })
      .catch((err) => {
        alert(RES_MESSAGE.FAIL(SIGN_IN));
      });
  };

  useEffect(() => {
    if (checkToken()) {
      navigate("/todo");
    }
  }, []);

  return (
    <div>
      <h2>{SIGN_IN}</h2>
      <form onSubmit={onSubmitHandler}>
        <Wrapper>
          <Input
            label="이메일"
            testId="email-input"
            placeholder={EMAIL_MES}
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <Input
            label="비밀번호"
            testId="password-input"
            placeholder={PASSWORD_MES}
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
          <Button
            testId="signin-button"
            text={SIGN_IN}
            disabled={isEmailValid && isPasswordValid ? false : true}
          />
        </Wrapper>
      </form>
    </div>
  );
}

export default Login;
