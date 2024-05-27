import { useEffect, useState } from "react";
import styled from "styled-components";

export default function SignUpItem({
  name,
  checkFun,
  changeEvent,
  pw,
  pwItem,
}) {
  const [notice, setNotice] = useState("");

  // 비밀번호 확인 컴포넌트 일때
  const onChangePWCheck = (pw, input) => {
    setNotice(checkFun(pw, input));
  };
  // 비밀번호 컴포넌트 일때
  const onChangePW = (input) => {
    changeEvent(input);

    setNotice(checkFun(input));

    if (setNotice(checkFun(input)) === "") {
      changeEvent(input);
    }
  };
  // 그외의 컴포넌트 일때
  const onChange = (input) => {
    setNotice(checkFun(input));

    // notice == "" 맞는 조건이라면 formData를 변경한다.
    if (setNotice(checkFun(input)) === "") {
      changeEvent(input);
    }
  };

  // const [input, setInput ] = useState()
  return (
    <div>
      <Input
        type={!pwItem ? "" : "password"}
        onChange={(e) => {
          const input = e.target.value;

          // 비밀번호 입력란이라면
          if (pwItem && pw === null) {
            onChangePW(input);
          } else if (pwItem) {
            console.log("========\n");
            console.log(pw);
            console.log("========\n");
            console.log(input);
            console.log("========\n");
            onChangePWCheck(pw, input);
          } else {
            onChange(input);
          }
        }}
        placeholder={`${name}을 입력해보세요`}
      ></Input>
      <Notice>{notice}</Notice>
    </div>
  );
}
const Input = styled.input`
  border-radius: 20px;

  width: 300px;
  height: 40px;
  margin: 5px;
  padding: 5px;
`;

const Notice = styled.p`
  color: red;
  margin: 10px;
`;
