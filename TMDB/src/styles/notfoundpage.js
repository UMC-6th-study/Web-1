import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  & h1 {
    margin-bottom: 20px;
    font-size: 30px;
  }

  & .text1 {
    margin-bottom: 20px;
    font-size: 13px;
  }

  & .text2 {
    margin-bottom: 20px;
    font-size: 15px;
    font-style: italic;
  }
`;

export default Container;
