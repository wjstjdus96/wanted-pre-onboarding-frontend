import { useState } from "react";
import styled from "styled-components";
import { requestUpdateTodo } from "../apis/todo";

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
    margin-right: 3px;
  }
`;

function TodoItem({ item }) {
  const [isChecked, setIsChecked] = useState(item.isCompleted);
  const [text, setText] = useState(item.todo);
  const checkedHandler = () => {
    setIsChecked((prev) => !prev);
    updateTodo();
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
        <button>수정</button>
        <button>삭제</button>
      </li>
    </ItemWrapper>
  );
}

export default TodoItem;
