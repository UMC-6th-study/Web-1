import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { add } from "../redux/todoSlice";

export default function InputTodo() {
  const dispatch = useDispatch();
  const [todolist, setTodolist] = useState({
    id: 0,
    text: "",
  });

  function handleText(e) {
    setTodolist({ text: e.target.value });
  }

  function onReset() {
    setTodolist({ text: "" });
  }

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <div className="inputTodo">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          //   공백이 아니라면
          if (todolist.text !== "") {
            dispatch(add(todolist.text));
            //  add(todolist.text) 액션 생성
            //  이후 dispatchf로 스토어 상태 변경
          } else alert("할 일을 입력해주세요!");
          onReset();
        }}
      >
        <div>
          <input
            className="text-bar"
            type="text"
            value={todolist.text}
            onChange={handleText}
          ></input>
          <input className="submit-button" type="submit" value="+"></input>
        </div>
      </form>
    </div>
  );
}
