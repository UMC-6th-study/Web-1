import { FormContainer } from "components/page/SignUpPage";
import SignUpItem from "components/item/SignUpItem";

export default function LoginPage() {
  // 한번 이상 제출 버튼을 눌렀는가 체크 변수
  const [submitOneMore, setSubmitOneMore] = useState(false);

  function checkNameTypes(obj) {
    // 한번더 사용,,,
    function noSpace(obj) {
      const whitespaceRegex = /\s/;

      if ((obj === "") | whitespaceRegex.test(obj)) return false;

      return true;
    }

    if (noSpace(obj)) {
      return "";
    }
    const innerText = "필수입력 항목입니다!";
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
  const INIT_DATA = {
    id: "",
    pw: "",
  };

  const INIT_VALIDATION_DATA = {
    id: false,
    pw: false,
  };

  const [checkValid, setCheckValid] = useState(INIT_VALIDATION_DATA);
  const [formData, setFormData] = useState(INIT_DATA);

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
  return (
    <>
      <FormContainer
        onSubmit={(e) => {
          // 아무것도 없다면 제출 금지
          e.preventDefault();
          setSubmitOneMore(true);

          if (checkValid.id && checkValid.pw) {
            console.log(formData);
            console.log("회원가입 성공");
          }
        }}
      >
        <h1 style={{ margin: "10px" }}>로그인 페이지 </h1>

        <SignUpItem
          name={"아이디"}
          id={"id"}
          checkFun={checkNameTypes}
          changeEvent={(value, isValid) => {
            handleChange("name", value, isValid);
          }}
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

        <Button>제출하기</Button>
      </FormContainer>
    </>
  );
}
