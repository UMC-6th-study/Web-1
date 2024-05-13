export default function Movie({ props }) {
  console.log(props);
  const { poster_path, title, vote_average, ...rest } = props;

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      <div>
        <p>{title}</p>
        <p>{vote_average}</p>
      </div>
    </>
  );
}
