import { useEffect } from "react";
import { checkToken } from "../utils/checkToken";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import { BiLogOut } from "react-icons/bi";
import { TOKEN_KEY } from "../constants/const";

const Wrapper = styled.div`
  width: 300px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkToken()) {
      navigate("/signin");
    }
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem(TOKEN_KEY);
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <div>
      <Wrapper>
        <Header>
          <h2>나의 투두</h2>
          <BiLogOut onClick={logOutHandler} size="24" />
        </Header>
        <TodoList />
      </Wrapper>
    </div>
  );
}

export default Todo;
