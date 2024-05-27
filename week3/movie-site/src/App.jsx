import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MovieTemplate from "./components/movie/movieTemplate";
import MainPage from "./components/movie/MainPage";
import PopularPage from "./components/movie/PopularPage";
import NowPlayingPage from "./components/movie/NowPlayingPage";
import TopRatedPage from "./components/movie/TopRatedPage";
import UpcomingPage from "./components/movie/UpcomingPage";
import Navbar from "./components/movie/Navbar";
import MovieDetailPage from "./components/movie/MovieDetailPage";
import SignUpPage from "./components/movie/SignUpPage";
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
          <Route path="/movie/:title" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
      <footer>MakeusUMC</footer>
    </>
  );
}

export default App;
