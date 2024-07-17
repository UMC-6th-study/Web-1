import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>Mini Todolist</h1>
      <InputTodo />
      <TodoList />
    </>
  );
}

export default App;
