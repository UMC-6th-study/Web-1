import { useEffect } from "react";
import { useState } from "react";
import ToDoItem from "./ToDoItem";

/**
 * 처음 렌더링 될때 todo에 ""인데도 todos에 들어가서
 * 시간 걸림ㄴ
 */

function TodoList({ todo }) {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  // 공백
  function noGap(obj) {
    const str = /^\s+$/g;

    if (obj === "" || str.exec(obj)) {
      // console.log("there is Gap");
      return false;
    }
    return true;
  }

  useEffect(() => {
    const newTodo = {
      id: todos.length + 1,
      content: todo,
      isDone: false,
    };
    if (noGap(todo)) setTodos([...todos, newTodo]);
  }, [todo]);

  const setNewTodos = (e) => {
    const id = parseInt(e.target.parentElement.id);

    const doneButtonHandler = (id) => {
      const tempTodo = todos.filter((list) => list.id === id);
      setTodos([...todos, (tempTodo[0].isDone = true)]);
    };

    const removeButtonHandler = (idx) => {
      // idx string으로 들어온다
      // tempTodo에서 filter가 안되고 그대로 나오느라 디버깅하는데 시간 엄청 걸렸다.
      const tempTodo = todos.filter((e) => e.id !== idx);

      setTodos(tempTodo);
    };

    if (todos[id - 1].isDone) {
      removeButtonHandler(id);
    } else {
      doneButtonHandler(id);
    }

    //원래 isDone null 값 처리한다음 , map 돌릴때 null 걸러서 렌더링 되지 않게 하려고 했는데
    // tempTodo 배열의 인덱스 idx를 사용하여 값을 찾는 대신에 이 값을 인덱스로 사용하여 새로운 값을 설정하려는 시도가 문제
  };

  return (
    <div className="todo-wrapper">
      <div className="todo" id="before">
        <p>해야할 일</p>

        {todos.map((e, id) => {
          if (e.isDone === false && noGap(e.content)) {
            return <ToDoItem key={id} todo={e} setTodos={setNewTodos} />;
          }
        })}
      </div>
      <div className="todo" id="after">
        <p>해낸 일</p>
        {todos.map((e, id) => {
          if (e.isDone === true && noGap(e.content)) {
            return <ToDoItem key={id} todo={e} setTodos={setNewTodos} />;
          }
        })}
      </div>
    </div>
  );
}

export default TodoList;
