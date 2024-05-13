import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #1f2047;
  /* background-color: #292a54; */
`;

function App() {
  return (
    <Container>
      <GlobalStyles></GlobalStyles>
      <Nav />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
