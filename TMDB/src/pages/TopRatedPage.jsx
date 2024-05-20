import { useEffect, useState } from "react";
import getAPI from "../api/api";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";

function TopRatedPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleTopRated = async () => {
    setLoading(true);
    const toprated = "toprated";
    const topRated = await getAPI(toprated);
    const data = topRated.results;
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    handleTopRated();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <MovieList items={items} />
    </>
  );
}

export default TopRatedPage;
