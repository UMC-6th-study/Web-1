import styled from "styled-components";
import spinner from "../assets/loadingSpinner.gif";
import Nav from "./Nav";

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #1f2047;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const LoadingText = styled.div`
//   color: white;
//   font: 1rem "Noto Sans KR";
//   text-align: center;
// `;

function Loading() {
  return (
    <>
      <Nav />
      <Background>
        <img src={spinner} alt="로딩 중" width="5%" />
      </Background>
    </>
  );
}

export default Loading;
