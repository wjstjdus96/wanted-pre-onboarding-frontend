import { useEffect, useState } from "react";
import { requestGetTodos } from "../apis/todo";
import { TODO_EMPTY_MES, TODO_LOADING_MES } from "../constants/const";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    requestGetTodos(setTodos);
  }, []);

  return (
    <div>
      <AddTodo setTodoHandler={setTodos} />
      {todos ? (
        todos.length == 0 ? (
          <span>{TODO_EMPTY_MES}</span>
        ) : (
          <div>
            {todos.map((item) => (
              <TodoItem item={item} key={item.id} setTodoHandler={setTodos} />
            ))}
          </div>
        )
      ) : (
        <span>{TODO_LOADING_MES}</span>
      )}
    </div>
  );
}

export default TodoList;
