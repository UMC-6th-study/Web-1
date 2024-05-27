import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../styles/signup";

function SignUpPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    age: "",
    pw: "",
    pwCheck: "",
  });
  const [inputValid, setInputValid] = useState({
    usernameValid: false,
    emailValid: false,
    ageValid: false,
    pwValid: false,
    pwCheckValid: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    usernameMsg: "",
    emailMsg: "",
    ageMsg: "",
    pwMsg: "",
    pwCheckMsg: "",
  });

  const submitRequirements =
    inputValid.usernameValid &&
    inputValid.emailValid &&
    inputValid.ageValid &&
    inputValid.pwValid &&
    inputValid.pwCheckValid;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
    console.log(inputValue);

    switch (name) {
      case "username":
        let isNameValid = value.trim().length > 0 && typeof value === "string";
        setInputValid((prev) => ({
          ...prev,
          usernameValid: isNameValid,
        }));
        setErrorMessage((prev) => ({
          ...prev,
          usernameMsg: "이름을 입력해주세요!",
        }));
        break;

      case "email":
        let isEmailValid =
          typeof value === "string" &&
          value.trim().length > 0 &&
          value.includes("@");
        setInputValid((prev) => ({
          ...prev,
          emailValid: isEmailValid,
        }));

        value.trim().length > 0 && !value.includes("@")
          ? setErrorMessage((prev) => ({
              ...prev,
              emailMsg: "이메일을 형식에 맞게 다시 입력해주세요!",
            }))
          : setErrorMessage((prev) => ({
              ...prev,
              emailMsg: "이메일을 입력해주세요!",
            }));
        break;

      case "age":
        let isAgeValid =
          !isNaN(value) && // 숫자 입력
          Number(value) >= 19 && // 음수 X, 19세 이상
          Number.isInteger(parseFloat(value)) && // 소수 X
          value.trim().length > 0;
        setInputValid((prev) => ({
          ...prev,
          ageValid: isAgeValid, // 입력O
        }));

        if (value.trim().length > 0) {
          if (isNaN(value)) {
            setErrorMessage((prev) => ({
              ...prev,
              ageMsg: "나이는 숫자로 입력해주세요!",
            }));
          } else if (Number(value) < 0) {
            setErrorMessage((prev) => ({
              ...prev,
              ageMsg: "나이는 양수여야 합니다!",
            }));
          } else if (!Number.isInteger(parseFloat(value))) {
            setErrorMessage((prev) => ({
              ...prev,
              ageMsg: "나이를 소수로 입력할 수 없습니다!",
            }));
          } else if (Number(value) < 19) {
            setErrorMessage((prev) => ({
              ...prev,
              ageMsg: "19세 이상만 이용 가능합니다!",
            }));
          }
        } else {
          setErrorMessage((prev) => ({
            ...prev,
            ageMsg: "나이를 입력해주세요!",
          }));
        }
        break;

      case "pw":
        const regexPw =
          /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[a-z0-9#?!@$%^&*-]+$/;

        let isPwValid =
          regexPw.test(value) &&
          value.trim().length >= 4 &&
          value.trim().length <= 12;
        setInputValid((prev) => ({
          ...prev,
          pwValid: isPwValid,
        }));

        if (value.trim().length > 0) {
          if (value.trim().length < 4) {
            setErrorMessage((prev) => ({
              ...prev,
              pwMsg: "최소 4자리 이상 입력해주세요!",
            }));
          } else if (!regexPw.test(value)) {
            setErrorMessage((prev) => ({
              ...prev,
              pwMsg: "비밀번호는 영어, 숫자, 특수문자를 포함해주세요!",
            }));
          } else if (value.trim().length > 12) {
            setErrorMessage((prev) => ({
              ...prev,
              pwMsg: "최대 12자리까지 입력 가능합니다!",
            }));
          }
        } else {
          setErrorMessage((prev) => ({
            ...prev,
            pwMsg: "비밀번호를 입력해주세요!",
          }));
        }
        break;

      case "pwCheck":
        let isPwCheckValid = value === inputValue.pw;
        setInputValid((prev) => ({
          ...prev,
          pwCheckValid: isPwCheckValid,
        }));

        value.trim().length > 0 && !isPwCheckValid
          ? setErrorMessage((prev) => ({
              ...prev,
              pwCheckMsg: "비밀번호가 일치하지 않습니다!",
            }))
          : setErrorMessage((prev) => ({
              ...prev,
              pwCheckMsg: "비밀번호를 다시 입력해주세요!",
            }));
        break;
    }
  };

  const handleSubmit = (e) => {
    console.log(inputValue);
    e.preventDefault();
    alert("회원가입 되었습니다!");
    navigate("/login");
  };

  // useEffect(() => {
  //   handleInput();
  // }, [inputValue]);

  return (
    <Container>
      <h1>회원가입</h1>
      <form action="#" method="GET" onSubmit={handleSubmit}>
        <div className="username-container">
          <input
            name="username"
            value={inputValue.username}
            onChange={handleInput}
            placeholder="이름을 입력해주세요"
          />
          {inputValid.usernameValid ? null : (
            <span className="error-message">{errorMessage.usernameMsg}</span>
          )}
        </div>

        <div className="email-container">
          <input
            name="email"
            onChange={handleInput}
            placeholder="이메일을 입력해주세요"
          />
          {inputValid.emailValid ? null : (
            <span className="error-message">{errorMessage.emailMsg}</span>
          )}
        </div>

        <div className="age-container">
          <input
            onChange={handleInput}
            name="age"
            placeholder="나이를 입력해주세요"
          />
          {inputValid.ageValid ? null : (
            <span className="error-message">{errorMessage.ageMsg}</span>
          )}
        </div>

        <div className="pw-container">
          <input
            name="pw"
            onChange={handleInput}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          ></input>
          {inputValid.pwValid ? null : (
            <span className="error-message">{errorMessage.pwMsg}</span>
          )}
        </div>

        <div className="pwcheck-container">
          <input
            name="pwCheck"
            onChange={handleInput}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          ></input>
          {inputValid.pwCheckValid ? null : (
            <span className="error-message">{errorMessage.pwCheckMsg}</span>
          )}
        </div>

        <button
          disabled={!submitRequirements}
          className={submitRequirements ? "enabled" : "disabled"}
          type="submit"
        >
          제출하기
        </button>
      </form>
      <div className="login-redirect">
        <span>이미 아이디가 있으신가요?</span>
        <span>
          <Link to="/login">로그인 페이지로 이동하기</Link>
        </span>
      </div>
    </Container>
  );
}

export default SignUpPage;
