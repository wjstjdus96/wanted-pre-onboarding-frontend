import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import styled from "styled-components";
import { requestCreateTodo, requestGetTodos } from "../apis/todo";
import { ADD, TODO_MES } from "../constants/const";

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
          placeholder={TODO_MES}
          type="text"
          value={enteredTodo}
          onChange={todoChangeHandler}
          required
        />
        <Button testId="new-todo-add-button" text={ADD} />
      </Wrapper>
    </form>
  );
}

export default AddTodo;
