import { useEffect } from "react";
import { checkToken } from "../utils/checkToken";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 300px;
`;

function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkToken()) {
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      <h2>나의 투두</h2>
      <Wrapper>
        <AddTodo />
        <TodoList />
      </Wrapper>
    </div>
  );
}

export default Todo;
