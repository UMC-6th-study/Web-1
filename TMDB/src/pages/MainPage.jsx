import styled from "styled-components";
import searchIcon from "../assets/search.png";

const Welcome = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  margin-bottom: 30px;
  background-color: black;
  color: white;
  font-size: 25px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 30px;
  color: white;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 35px;
  border: none;
  border-radius: 50px;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: -40px;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  /* border-radius: 50%; */
  background-color: #fcba03;
  transform: translateY(50%);
`;

function MainPage() {
  return (
    <>
      <Welcome>환영합니다</Welcome>
      <Main>
        <Title>🎬Find your movies!</Title>
        <SearchContainer>
          <SearchInput />
          <SearchIcon src={searchIcon} />
        </SearchContainer>
      </Main>
    </>
  );
}

export default MainPage;
