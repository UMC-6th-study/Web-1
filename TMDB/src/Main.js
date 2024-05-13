import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import MainPage from "./pages/MainPage";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpComing from "./pages/UpComing";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpComing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
