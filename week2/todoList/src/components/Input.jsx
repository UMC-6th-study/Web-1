import TodoList from "./TodoList";
import FinishedList from "./FinishedList";
import { useEffect, useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");

  //   let value = "dfs";

  //   그냥 전역변수로 사용한다면 react가  변화를 감지하지 못해 다시 렌더링 되지 않는다.
  /**
   * 상태나 props가 변경되면, 해당 컴포넌트를 다시 렌더링하는데
   * 전역변수로 값을 관리할 시, React가 변수의 변경을 감지하지 못한다.
   * -> 컴포넌트가 렌더링이 안돼서 todolist의 렌더링이 안됨!
   * -> 처음 화면에 나타난 UI 그대로이다.
   *
   *
   */

  const onKeyDown = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      const inputValue = e.target.value;
      setValue(inputValue);
      console.log(inputValue);
      //   두번 눌려서 한국어 맨 마지막 글자만 들어가는  오류 발생
      //   추측 하건데 영어는 1byte 이고 한글은 2byte 라서 utf-8 문자 변환 관련 로직에서 에러가 나는 것 같다.
      //   찾아보니 keydown과 keyup은 모든 문자를 인식하는 반면, keypress는 한글을 인식하지 않는다고 한다.
      e.target.value = "";
    }
  };

  return (
    <>
      {/* <div className="sub-group"> */}
      <input
        type="text"
        placeholder="스터디 계획을 작성해보세요"
        onKeyDown={onKeyDown}
      />
      <TodoList todo={value} />
    </>
  );
}
