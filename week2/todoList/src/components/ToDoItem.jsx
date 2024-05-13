export default function ToDoItem({ todo, setTodos }) {
  const { id, content, isDone } = todo;

  return (
    <li id={id}>
      <span>{content}</span>
      <button onClick={setTodos}>{isDone ? "완료" : "시작"}</button>
    </li>
  );
}
