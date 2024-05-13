import styled from "styled-components";
import MovieList from "./MovieList";
import GlobalStyles from "./GlobalStyles";
import { mockData } from "../mock";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  /* background-color: #242a6b; */
  background-color: #1f2047;
`;

function App() {
  const mock = mockData.results;

  return (
    <Container>
      <GlobalStyles></GlobalStyles>
      <MovieList items={mock}></MovieList>
    </Container>
  );
}

export default App;
