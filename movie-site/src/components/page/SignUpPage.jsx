import styled from "styled-components";
import { useEffect, useState } from "react";
import SignUpItem from "item/SignUpItem";
import { useNavigate } from "react-router-dom";

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
  if (noSpace(obj)) {
    return "";
  }
  const innerText = "필수입력 항목입니다!";
  return innerText;
}

function checkIdTypes(obj) {
  if (noSpace(obj)) {
    return "";
  }

  const innerText = "아이디를 입력해주세요!";
  return innerText;
}

function checkEmailType(obj) {
  let innerText;
  if (obj.includes("@") && noSpace(obj)) {
    return "";
  }

  if (!noSpace(obj)) {
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
    id: "",
    email: "",
    age: "",
    pw: "",
    checkPw: "",
  };
  const [formData, setFormData] = useState(INIT_DATA);

  const [pw, setPw] = useState("");
  const useNavigation = useNavigate();
  const [btnColor, setBtnColor] = useState("white");

  const handleChange = (tagName, value, isValid) => {
    setFormData({
      ...formData,
      [tagName]: value,
    });

    setCheckValid({
      ...checkValid,
      [tagName]: isValid,
    });
  };

  const INIT_VALIDATION_DATA = {
    name: false,
    id: false,
    email: false,
    age: false,
    pw: false,
    checkPw: false,
  };

  const [checkValid, setCheckValid] = useState(INIT_VALIDATION_DATA);

  // 한번 이상 제출 버튼을 눌렀는가 체크 변수
  const [submitOneMore, setSubmitOneMore] = useState(false);

  /**
   * 조건 만족할 시 button background 색깔 변경
   */
  useEffect(() => {
    if (
      checkValid.name &&
      checkValid.email &&
      checkValid.pw &&
      checkValid.checkPw
    ) {
      setBtnColor("#ffe100");
      return;
    }

    setBtnColor("white");
  }, [checkValid]);

  return (
    <>
      <FormContainer
        onSubmit={(e) => {
          // 아무것도 없다면 제출 금지
          e.preventDefault();
          setSubmitOneMore(true);

          if (
            checkValid.name &&
            checkValid.email &&
            checkValid.pw &&
            checkValid.checkPw
          ) {
            console.log(formData);
            console.log("회원가입 성공");
          }
        }}
      >
        <h1 style={{ margin: "10px" }}>회원가입 페이지 </h1>
        <SignUpItem
          name={"이름"}
          id={"name"}
          checkFun={checkNameTypes}
          changeEvent={(value, isValid) => {
            handleChange("name", value, isValid);
          }}
          pw={null}
          pwItem={false}
          submitOneMore={submitOneMore}
        />
        <SignUpItem
          name={"아이디"}
          id={"id"}
          checkFun={checkIdTypes}
          changeEvent={(value, isValid) => {
            handleChange("id", value, isValid);
          }}
          pw={null}
          pwItem={false}
          submitOneMore={submitOneMore}
        />
        <SignUpItem
          name={"이메일"}
          id={"email"}
          checkFun={checkEmailType}
          changeEvent={(value, isValid) =>
            handleChange("email", value, isValid)
          }
          pw={null}
          pwItem={false}
          submitOneMore={submitOneMore}
        />
        <SignUpItem
          name={"나이"}
          id={"age"}
          checkFun={checkAgeType}
          changeEvent={(value, isValid) => handleChange("age", value, isValid)}
          pw={null}
          pwItem={false}
          submitOneMore={submitOneMore}
        />

        <SignUpItem
          name={"비밀번호"}
          id={"pw"}
          checkFun={checkPWType}
          changeEvent={(value, isValid) => {
            handleChange("pw", value, isValid);
            setPw(value, isValid);
          }}
          pw={null}
          pwItem={true}
          submitOneMore={submitOneMore}
        />
        <SignUpItem
          name={"비밀번호 확인"}
          id={"pwCheck"}
          checkFun={doubleCheckPW}
          changeEvent={(value, isValid) => {
            handleChange("checkPw", value, isValid);
          }}
          pw={pw}
          pwItem={true}
          submitOneMore={submitOneMore}
        />
        <Button color={btnColor}>제출하기</Button>
        <Container>
          <p>이미 아이디가 있으신가요?</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              useNavigation("/login");
            }}
          >
            로그인 페이지로 이동하기
          </button>
        </Container>
      </FormContainer>
    </>
  );
}

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  background-color: ${(props) => props.color};
  border-color: transparent;
  width: 300px;
  height: 40px;
  margin-top: 30px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 30px;

  justify-content: center;
  p {
    font-weight: 300;
  }

  button {
    background: transparent;
    border: none;
    font-size: large;
    font-weight: 700;
    color: white;
  }
`;
