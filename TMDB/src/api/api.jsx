const key = "a050f3beccdafdbb0b24bfa3ce6e3741";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDUwZjNiZWNjZGFmZGJiMGIyNGJmYTNjZTZlMzc0MSIsInN1YiI6IjY2M2Y4MWU4ZWE5ZjBlNzE0NmMxOWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FB7En8B0HHrpdemrYAdWbtLCpZMzsItrRFCZ9IMVipw",
  },
};

const popular = {
  name: "popular",
  url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1?",
};

const nowPlaying = {
  name: "nowplaying",
  url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1?",
};

const topRated = {
  name: "toprated",
  url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1?",
};

const upComing = {
  name: "upcoming",
  url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1?",
};

function getIndex(index) {
  const result =
    index === popular.name
      ? popular.url
      : index === nowPlaying.name
      ? nowPlaying.url
      : index === topRated.name
      ? topRated.url
      : index === upComing.name
      ? upComing.url
      : undefined;
  return result;
}

export default async function getAPI(index) {
  const response = await fetch(`${getIndex(index)}api_key=${key}`, options);
  const data = response.json();
  return data;
}
