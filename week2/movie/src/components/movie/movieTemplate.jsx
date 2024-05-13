import Movie from "./movie";
import { movies } from "./API_data";

export default function MovieTemplate() {
  return (
    <div className="movie-container">
      {movies.results.map((movie) => (
        <Movie key={movie.id} props={movie} />
      ))}
    </div>
  );
}
