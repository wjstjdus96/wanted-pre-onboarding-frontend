import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import styled from "styled-components";
import { requestCreateTodo, requestGetTodos } from "../apis/todo";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  div {
    width: 80%;
  }
`;

function AddTodo({ setTodoHandler }) {
  const [enteredTodo, setEnteredTodo] = useState("");
  const todoChangeHandler = (e) => {
    setEnteredTodo(e.target.value);
  };
  const submitTodoHandler = async (e) => {
    e.preventDefault();
    const data = { todo: enteredTodo };
    await requestCreateTodo(data);
    await requestGetTodos(setTodoHandler);
    setEnteredTodo("");
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <Wrapper>
        <Input
          testId="new-todo-input"
          placeholder="투두를 적으십시오"
          type="text"
          value={enteredTodo}
          onChange={todoChangeHandler}
          required
        />
        <Button testId="new-todo-add-button" text="추가" />
      </Wrapper>
    </form>
  );
}

export default AddTodo;
