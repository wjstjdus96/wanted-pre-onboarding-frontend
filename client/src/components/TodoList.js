import { useEffect, useState } from "react";
import { requestGetTodos } from "../apis/todo";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    requestGetTodos(setTodos);
  }, []);

  return (
    <div>
      {todos ? (
        todos.length == 0 ? (
          <span>할 일을 추가하십시오</span>
        ) : (
          <div>
            {/* <TodoItem todo={todos} /> */}
            {todos.map((item) => (
              <TodoItem item={item} />
            ))}
          </div>
        )
      ) : (
        <span>로딩중</span>
      )}
    </div>
  );
}

export default TodoList;
