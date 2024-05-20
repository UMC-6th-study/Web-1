import Movie from "./Movie";
import { movies } from "./API_data";


export default function MovieTemplate({ movieList }) {
  return (
    <div className="movie-container">
      {movieList.map((movie) => (
        <Movie key={movie.id} props={movie} />
      ))}
    </div>
  );
}
