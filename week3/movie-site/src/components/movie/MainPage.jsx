import styled from "styled-components";

export default function MainPage() {
  return (
    <div className="main-page">
      <Welcome>환영합니다.</Welcome>
      <Search>
        <h2> Find your movies!</h2>
        <div className={"input-contianer"}>
          <input></input>
          <p>🔎</p>
        </div>
      </Search>
    </div>
  );
}

const Welcome = styled.div`
  height: 40%;
  text-align: center;
  background-color: rgba(0, 0, 0);
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  .input-contianer {
    display: flex;
    flex-direction: row;
    margin: 20px;
  }
  height: 50%;
  .input-contianer input {
    border-radius: 20px;

    width: 300px;
    height: 40px;
  }

  p {
    padding-left: 20px;
    padding-top: 5px;
    height: 40px;
    display: flex;
    align-items: center;

    font-size: 30px;
  }
`;
