import { useEffect, useState } from "react";
import Container from "../styles/signup";

function SignUpPage() {
  const [inputValue, setInputValue] = useState({
    username: "",
    usernameValid: false,
    email: "",
    emailValid: false,
    age: "",
    ageValid: false,
    pw: "",
    pwValid: false,
    checkpw: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));

    console.log(inputValue.username);

    switch (name) {
      case "username":
        inputValue.username === ""
          ? setInputValue((prev) => ({ ...prev, usernameValid: false }))
          : setInputValue((prev) => ({ ...prev, usernameValid: true }));
        break;
    }
  };

  useEffect(() => {
    handleInput();
  }, [inputValue]);

  return (
    <Container>
      <h1>회원가입</h1>
      <form action="#" method="GET">
        <input
          name="username"
          onChange={handleInput}
          className="username"
          placeholder="이름을 입력해주세요"
        />
        {inputValue.usernameValid ? null : <span>이름을 입력해주세요!</span>}

        <input
          name="email"
          onChange={handleInput}
          className="email"
          placeholder="이메일을 입력해주세요"
        />

        <input
          onChange={handleInput}
          name="age"
          className="age"
          placeholder="나이를 입력해주세요"
        />

        <input
          name="pw"
          onChange={handleInput}
          className="pw"
          placeholder="비밀번호를 입력해주세요"
        ></input>

        <input
          name="checkpw"
          onChange={handleInput}
          className="pw-check"
          placeholder="비밀번호 확인"
        />

        <button type="submit">제출하기</button>
      </form>
      <div className="login-redirect">
        <span>이미 아이디가 있으신가요?</span>
        <span>로그인 페이지로 이동하기</span>
      </div>
    </Container>
  );
}

export default SignUpPage;
