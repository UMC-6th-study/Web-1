import { useEffect, useState } from "react";
import getAPI from "../api/api";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";

function UpComing() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleUpComing = async () => {
    setLoading(true);
    const upcoming = "upcoming";
    const upComing = await getAPI(upcoming);
    const data = upComing.results;
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    handleUpComing();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <MovieList items={items} />
    </>
  );
}

export default UpComing;
