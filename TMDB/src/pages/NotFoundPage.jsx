import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "../styles/notfoundpage";

const NavStyle = styled(NavLink)`
  font-size: 20px;
`;

function NotFoundPage() {
  return (
    <Container>
      <h1>Oops!</h1>
      <span className="text1">예상치 못한 에러가 발생했습니다；′⌒`</span>
      <span className="text2">Not Found</span>
      <strong>
        <NavStyle to="/">메인으로 돌아가기</NavStyle>
      </strong>
    </Container>
  );
}

export default NotFoundPage;
