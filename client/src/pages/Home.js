import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { HOME, SIGN_IN, SIGN_UP } from "../constants/const";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  button {
    width: 100%;
    margin-bottom: 30px;
  }
`;

function Home() {
  return (
    <div>
      <h2>{HOME}</h2>
      <Buttons>
        <Link to="/signin">
          <Button text={SIGN_IN} disabled={false} />
        </Link>
        <Link to="/signup">
          <Button text={SIGN_UP} disabled={false} />
        </Link>
      </Buttons>
    </div>
  );
}

export default Home;
