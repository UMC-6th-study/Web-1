import { useEffect, useState } from "react";
import MovieTemplate from "./movieTemplate";

export default function PopularPage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjFkZjE3OGU5N2IxNjRhMjAzMGQzNmU0OTQwMWY0NiIsInN1YiI6IjY2NDE4NGVjYjg0ZWUwMTdhMjIwZDU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqxgD4lezqaetuL5YLOvVEt2ZbGYzUUak1M8uFTRwJ",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=bb1df178e97b164a2030d36e49401f46",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return <>{movies ? <MovieTemplate movieList={movies} /> : "Loading..."}</>;
}
