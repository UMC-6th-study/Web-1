import Container from "../styles/loginpage";

function LoginPage() {
  return (
    <Container>
      <h1>로그인</h1>
      <form>
        <input className="id-input" placeholder="아이디" />
        <input className="pw-input" placeholder="비밀번호" type="password" />
        <button type="submit">로그인</button>
      </form>
    </Container>
  );
}

export default LoginPage;
