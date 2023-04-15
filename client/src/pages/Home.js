import styled from "styled-components";
import { Link } from "react-router-dom";

const Buttons = styled.div`
  display: flex;
  gap: 30px;
  button {
    padding: 3px;
    text-decoration: none;
  }
`;

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Buttons>
        <Link to="/signin">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </Buttons>
    </div>
  );
}

export default Home;
