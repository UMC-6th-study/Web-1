import styled from "styled-components";
import MovieListItem from "./MovieListItem";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  padding-left: 0;
  background-color: #1f2047;
  /* background-color: #292a54; */
`;

function MovieList({ items }) {
  return (
    <>
      <Ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <MovieListItem item={item}></MovieListItem>
            </li>
          );
        })}
      </Ul>
    </>
  );
}

export default MovieList;
