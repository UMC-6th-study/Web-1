import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "page/MainPage";
import SignUpPage from "page/SignUpPage";
import PopularPage from "page/PopularPage";
import NowPlayingPage from "page/NowPlayingPage";
import TopRatedPage from "page/TopRatedPage";
import UpcomingPage from "page/UpcomingPage";
import Navbar from "item/Navbar";
import MovieDetailPage from "page/MovieDetailPage";
import LoginPage from "page/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/nowPlaying" element={<NowPlayingPage />} />
          <Route path="/topRated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />

          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <footer>MakeusUMC</footer>
      </BrowserRouter>
    </>
  );
}

export default App;
