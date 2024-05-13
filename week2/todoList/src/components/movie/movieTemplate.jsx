import Movie from "./movie";
import { movies } from "./API_data";

export default function MovieTemplate() {
  return (
    <>
      {movies.results.map((e) => (
        <Movie key={e.id} props={e} />
      ))}
    </>
  );
}
