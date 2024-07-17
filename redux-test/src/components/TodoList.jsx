import { useDispatch, useSelector } from "react-redux";
import { complete, remove } from "../redux/todoSlice";
import { useEffect } from "react";

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  // 상태조회
  // 조회시, 상태가 바뀌지 않았다면 리렌더링이 일어나지 않는다.

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  const todolistView = todolist.map((todo, idx) => {
    return (
      <li>
        <input
          className="check-box"
          type="checkbox"
          onChange={() => {
            dispatch(complete(remove(todolist[idx].id)));
          }}
        ></input>
        <span>
          {!todo.complete ? <>{todo.text}</> : <del>{todo.text}</del>}
        </span>
        <button
          type="button"
          onClick={() => dispatch(remove(todolist[idx].id))}
        >
          x
        </button>
      </li>
    );
  });

  //   todo

  return (
    <>
      <ul>{todolistView}</ul>
    </>
  );
}
