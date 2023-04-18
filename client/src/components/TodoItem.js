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
    display: flex;
    align-items: center;
  }
  span {
    font-size: 15px;
  }
  input[type="checkbox"] {
    margin-right: 6px;
  }
  input[type="text"] {
    padding-bottom: 5px;
    border: none;
    border-bottom: 1px solid black;
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
  const [newText, setNewText] = useState(text);
  const [isRevise, setIsRevise] = useState(false);

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
  const reviseHandler = () => {
    setIsRevise(true);
    // document.getElementById("modify-input").focus();
  };
  const cancelHandler = () => {
    setIsRevise(false);
  };
  const submitHandler = (e) => {
    setText(newText);
    setIsRevise(false);
  };
  const modifyTextHandler = (e) => {
    setNewText(e.target.value);
  };

  return (
    <ItemWrapper>
      <li>
        {isRevise ? (
          <>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={checkedHandler}
              />
              <input
                data-testid="modify-input"
                id="modify-input"
                type="text"
                value={newText}
                onChange={modifyTextHandler}
              />
            </label>
            <button data-testid="submit-button" onClick={submitHandler}>
              제출
            </button>
            <button data-testid="cancel-button" onClick={cancelHandler}>
              취소
            </button>
          </>
        ) : (
          <>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={checkedHandler}
              />
              <span>{text}</span>
            </label>
            <button data-testid="modify-button" onClick={reviseHandler}>
              수정
            </button>
            <button data-testid="delete-button" onClick={deleteHandler}>
              삭제
            </button>
          </>
        )}
      </li>
    </ItemWrapper>
  );
}

export default TodoItem;
