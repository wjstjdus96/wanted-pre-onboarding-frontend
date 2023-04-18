import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  requestDeleteTodo,
  requestGetTodos,
  requestUpdateTodo,
} from "../apis/todo";
import useDidMountEffect from "../hooks/useDidMountEffect";

const ItemWrapper = styled.div`
  padding: 10px 0px;
  width: 300px;
  li {
    list-style: none;
    display: flex;
    align-items: center;
  }
  label {
    flex-grow: 6;
  }
  input {
    margin-right: 6px;
  }
  button {
    margin-left: 6px;
    background-color: white;
    border: 1.5px solid #0171e3;
    border-radius: 10px;
    cursor: pointer;
  }
`;

function TodoItem({ item, setTodoHandler }) {
  const [isChecked, setIsChecked] = useState(item.isCompleted);
  const [text, setText] = useState(item.todo);

  useDidMountEffect(() => {
    updateTodo();
  }, [isChecked, text]);

  const checkedHandler = () => {
    setIsChecked((prev) => !prev);
  };
  const deleteHandler = async () => {
    await requestDeleteTodo(item.id);
    await requestGetTodos(setTodoHandler);
  };
  const updateTodo = () => {
    const newData = {
      todo: text,
      isCompleted: isChecked,
    };
    requestUpdateTodo(item.id, newData);
  };

  return (
    <ItemWrapper>
      <li>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={checkedHandler}
          />
          <span>{text}</span>
        </label>
        <button data-testid="modify-button">수정</button>
        <button onClick={deleteHandler} data-testid="delete-button">
          삭제
        </button>
      </li>
    </ItemWrapper>
  );
}

export default TodoItem;
