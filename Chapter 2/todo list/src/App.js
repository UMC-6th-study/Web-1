import styled, { createGlobalStyle } from "styled-components";
import Title from "./Title";
import ToDoContainer from "./ToDoContainer";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color:#ebf0f2;
  }
`;

const Container = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
`;

function App() {
  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Title></Title>
      <ToDoContainer></ToDoContainer>
    </Container>
  );
}

export default App;
