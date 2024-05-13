import { useState } from "react";
import styled from "styled-components";
import ToDo from "./ToDo";
import Done from "./Done";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToDoInput = styled.input`
  width: 500px;
  height: 55px;
  padding-left: 15px;
  margin-bottom: 40px;
  border: 1px solid grey;

  &::placeholder {
    color: grey;
  }
`;

const ToDoWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
`;

function ToDoContainer() {
  const [todo, setToDo] = useState("");
  const [id, setId] = useState(1);
  const [todos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setId((id) => (id += 1));
    setToDos([{ id: id, content: todo, isDone: false }, ...todos]);
    setToDo("");
  };

  const clickComplete = (index) => {
    const newToDos = todos.map((newToDo, newIndex) =>
      index === newIndex ? { ...newToDo, isDone: true } : newToDo
    );
    setToDos(newToDos);
  };

  const clickDelete = (delId) => {
    setToDos(todos.filter((delToDo) => delToDo.id !== delId));
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <ToDoInput
          value={todo}
          onChange={onChange}
          placeholder="UMC 스터디 계획을 작성해보세요!"
        ></ToDoInput>
      </form>
      <ToDoWrapper>
        <ToDo todos={todos} onClick={clickComplete}></ToDo>
        <Done todos={todos} onClick={clickDelete}></Done>
      </ToDoWrapper>
    </Wrapper>
  );
}

export default ToDoContainer;
