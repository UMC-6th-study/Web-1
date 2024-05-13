import Title from "./Title";
import "../styles/App.css";
import Input from "./Input";

function TodoForm() {
  return (
    <div className="todo-form">
      <Title />
      <Input />
    </div>
  );
}

export default TodoForm;
