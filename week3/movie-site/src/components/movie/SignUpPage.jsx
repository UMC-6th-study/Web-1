import styled from "styled-components";
import { useEffect, useState } from "react";
import SignUpItem from "./SignUpItem";

/**
 * 1. 동일한 input + notice div 스타일 컴포넌트를 만든다.
 * 2. map 을 이용해 props만 바꾼다.
 *  이때의 prop은 tag 이름, placeholder, checklogic, noice palceholder
 *
 * 제출하기 눌렀을시 -> 제어컴포넌트
 *
 *
 */

/**
 *공백을 검사하는 함수
 * @param obj
 * @returns
 */
function noSpace(obj) {
  const whitespaceRegex = /\s/;

  if ((obj === "") | whitespaceRegex.test(obj)) return false;

  return true;
}

function checkNameTypes(obj) {
  // 한번더 사용,,,
  if (noSpace(obj)) {
    return "";
  }
  const innerText = "필수입력 항목입니다!";
  return innerText;
}

function checkEmailType(obj) {
  let innerText;
  if (obj.includes("@") && noSpace(obj)) {
    return "";
  }

  if (!noSpace(obj)) {
    console.log(obj);
    innerText = "이메일을 입력해주세요";
    return innerText;
  }
  innerText = "올바른 이메일 형식이 아닙니다!";
  return innerText;
}

function checkPWType(obj) {
  let innerText;
  const regex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~@#$!%*?&])[a-zA-Z\d~@#$!%*?&]{4,12}$/;

  if (regex.exec(obj)) {
    // 올바른 비밀번호형식
    return "";
  }
  if (!noSpace(obj)) {
    innerText = "비밀번호를 입력해주세요";
  } else if (obj.length < 4) {
    innerText = "4자리 수 이상이어야 합니다.";
  } else if (obj.length > 12) {
    innerText = "12자리 수 이하이어야 합니다.";
  } else innerText = "올바른 비밀번호 형식이 아닙니다.";

  return innerText;
}

function checkAgeType(obj) {
  let innerText;
  const regex = /^[0-9]*$/;
  if (regex.exec(obj) && parseInt(obj) >= 19) {
    return "";
  }

  if (parseInt(obj) < 0) {
    innerText = "나이는 양수여야합니다.";
  } else if (parseInt(obj) < 19) {
    innerText = "19세 이상만 사용 가능합니다.";
  } else if (!Number.isInteger(obj)) {
    innerText = "나이는 실수로 입력해주세요.";
  } else {
    innerText = "비밀번호를 입력해주세요";
  }

  return innerText;
}

function doubleCheckPW(pw, obj) {
  let innerText;
  if (obj === pw) {
    innerText = "비밀번호 일치합니다.";
    return innerText;
  }
  innerText = "비밀번호 일치하지 않습니다.";
  return innerText;
  // pw input창 value 같은지 확인해야함
}

// formData 초기값 데이터가 ""인지를 체크 => 아니라면 변화 유

export default function SignUpPage() {
  const INIT_DATA = {
    name: "",
    email: "",
    age: "",
    pw: "",
    pwItem: "",
  };
  const [formData, setFormData] = useState(INIT_DATA);

  const [pw, setPw] = useState("");

  const handleChange = (tagName, value) => {
    setFormData({
      ...formData,
      [tagName]: value,
    });
  };

  return (
    <>
      <FormContainer
        onSubmit={(e) => {
          // 아무것도 없다면 제출 금지

          if (JSON.stringify(formData) === JSON.stringify(INIT_DATA)) {
            e.preventDefault();
            setCheckAllComponent(true);
          }
        }}
      >
        <h1 style={{ margin: "10px" }}>회원가입 페이지 </h1>
        <SignUpItem
          name={"이름"}
          checkFun={checkNameTypes}
          changeEvent={(value) => handleChange("name", value)}
          pw={null}
          pwItem={false}
        />
        <SignUpItem
          name={"이메일"}
          checkFun={checkEmailType}
          changeEvent={(value) => handleChange("email", value)}
          pw={null}
          pwItem={false}
        />
        <SignUpItem
          name={"나이"}
          checkFun={checkAgeType}
          changeEvent={(value) => handleChange("age", value)}
          pw={null}
          pwItem={false}
        />

        <SignUpItem
          name={"비밀번호"}
          checkFun={checkPWType}
          changeEvent={(value) => {
            handleChange("pw", value);
            setPw(value);
          }}
          pw={null}
          pwItem={true}
        />
        <SignUpItem
          name={"비밀번호 확인"}
          checkFun={doubleCheckPW}
          changeEvent={(value) => {
            handleChange("checkPw", value);
          }}
          pw={pw}
          pwItem={true}
        />
        <Button>제출하기</Button>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  /* background: white; */
`;

const Button = styled.button`
  border-radius: 20px;

  width: 300px;
  height: 40px;
`;

// const itemList = [
//   {
//     idTag: "이름",
//     checkLogic: () => {
//       console.log("hey");
//     },
//   },
//   {
//     idTag: "이름",
//     checkLogic: () => {
//       console.log("hey");
//     },
//   },
//   {
//     idTag: "이름",
//     checkLogic: () => {
//       console.log("hey");
//     },
//   },
//   {
//     idTag: "이름",
//     checkLogic: () => {
//       console.log("hey");
//     },
//   },
//   {
//     idTag: "이름",
//     checkLogic: () => {
//       console.log("hey");
//     },
//   },
// ];
