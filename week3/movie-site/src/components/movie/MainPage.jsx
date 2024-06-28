import styled from "styled-components";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import useDebounce from "../custom/useDebounce";

export default function MainPage() {
  const [text, setText] = useState("");
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const [movieList, setMovieList] = useState([]);

  /**
   * fetch함수
   */
  const searchData = (queryString) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjFkZjE3OGU5N2IxNjRhMjAzMGQzNmU0OTQwMWY0NiIsIm5iZiI6MTcxOTUzNTMyNC44NzA3MjcsInN1YiI6IjY2NDE4NGVjYjg0ZWUwMTdhMjIwZDU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wBUqKt4MJWdumjYJWr2YnF15zLBSotui92m_Bu8JzCU",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${queryString}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setMovieList(response.results);
      })
      .catch((err) => console.error(err));
  };

  const onChange = (e) => {
    const input = e.target.value;
    setText(input);
    setLoading(true);

    if (input === "") {
      setEmpty(true);
      return;
    }
    setEmpty(false);
  };

  //검색 버튼 눌렀을시에만 검색하기 위해 미리 만들어놓음
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const queryString = useDebounce(text, 2000);

  //after Debounce
  useEffect(() => {
    setLoading(false);
    searchData(queryString);
  }, [queryString]);
  return (
    <MainPageBody id="main-page" navHeight={50} footerHeight={30}>
      <Welcome>환영합니다.</Welcome>
      <Search onSubmit={onSubmit}>
        <h2> Find your movies!</h2>
        <div className={"input-contianer"}>
          <input onChange={onChange} value={text} />
          <button>🔎</button>
        </div>

        {empty ? (
          ""
        ) : loading ? (
          // <Notice>로딩중입니다.</Notice>
          <Notice>로딩중입니다.</Notice>
        ) : !movieList.length ? (
          <Notice>검색결과가 없습니다.</Notice>
        ) : (
          <MovieTempalte>
            {movieList.map((movie) => (
              <Movie key={movie.id} props={movie} />
            ))}
          </MovieTempalte>
        )}
      </Search>
    </MainPageBody>
  );
}

const MainPageBody = styled.div`
  min-height: calc(
    100% - ${(props) => props.navHeight}px - ${(props) => props.footerHeight}px
  );
  /* height: 100%; */
`;

const Welcome = styled.div`
  height: 300px;
  text-align: center;
  background-color: rgba(0, 0, 0);
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MovieTempalte = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);

  box-sizing: content-box;

  color: white;

  height: 500px;
  width: 60%;
  margin: 0 auto;
  gap: 10px;
  background-color: #0b0445c2;
  padding-top: 20px;
  padding-right: 40px;
  padding-left: 40px;
  padding: 20px 60px 20px 60px;
  border-radius: 5px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #dbcd13;
  }
`;

const Search = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;

  .input-contianer {
    display: flex;
    flex-direction: row;
    margin: 20px;
  }
  .input-contianer input {
    border-radius: 20px;
    width: 300px;
    height: 40px;
  }

  button {
    height: 40px;
    padding: 2px 10px 5px 10px;
    background: orange;
    display: flex;
    align-items: center;

    font-size: 30px;
    border-radius: 20px;
  }
`;

const Notice = styled(MovieTempalte)`
  display: flex;
  justify-content: center;
  align-content: center;
`;
