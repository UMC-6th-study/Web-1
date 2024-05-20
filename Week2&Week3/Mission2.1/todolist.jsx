import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleComplete = (index) => {
    const updatedTodos = [...todos];
    const completedTodo = updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    // 이동한 할 일을 완료된 일로 추가
    setDoneList(doneList.concat(completedTodo));
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
      <div>
        <h3>해야 할 일</h3>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleComplete(index)}>완료</button>
              <button onClick={() => handleDelete(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>해낸 일</h3>
        <ul>{/* 완료된 일 목록 */}</ul>
      </div>
    </div>
  );
}

export default ToDoList;
