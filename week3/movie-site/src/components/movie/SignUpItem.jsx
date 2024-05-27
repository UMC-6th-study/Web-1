import { useEffect, useState } from "react";
import styled from "styled-components";

/**
 *공백이 있는지를 검사하는 함수
 * @param obj
 * @returns
 */
function noSpace(obj) {
  // 공백사용못하게
  const str_space = /^\s+|\s+$/g;

  if (obj.value === "") return false;
  if (str_space.exec(obj.value)) {
    obj.focus();
    obj.value = obj.value.replace(/\s| /gi, ""); // 공백제거
  }
  return true;
}

export default function SignUpItem({
  name,
  checkFun,
  changeEvent,
  pw,
  pwItem,
}) {
  const [notice, setNotice] = useState("");

  return (
    <div>
      <Input
        type={!pwItem ? "" : "password"}
        onSubmit={(e) => {
          console.log("Sdfsd");
          const input = e.target.value;
          console(input);

          // 비밀번호 입력란이라면
          if (pwItem && pw === null) {
            changeEvent(input);
          } else if (pwItem) {
            setNotice(checkFun(pw, input));
            return;
          }

          setNotice(checkFun(input));

          // notice == "" 맞는 조건이라면 formData를 변경한다.
          if (setNotice(checkFun(input)) === "") {
            changeEvent(input);
          }
        }}
        onChange={(e) => {
          const input = e.target.value;

          // 비밀번호 입력란이라면
          if (pwItem && pw === null) {
            changeEvent(input);
          } else if (pwItem) {
            setNotice(checkFun(pw, input));
            return;
          }

          setNotice(checkFun(input));

          // notice == "" 맞는 조건이라면 formData를 변경한다.
          if (setNotice(checkFun(input)) === "") {
            changeEvent(input);
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
