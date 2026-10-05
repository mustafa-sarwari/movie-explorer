import { previewMode } from './services/preview';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from './pages/Favorites';
import MoviePlayer from "./pages/MoviePlayer.jsx";
import NavBar from "./components/NavBar.jsx"
import { MovieProvider } from "./context/MovieContext";
import "./CSS/App.css";

function App() {
 return (
  <MovieProvider>
    <NavBar />
    {previewMode && <aside className="preview-notice" aria-label="Demo information">
      <strong>Interactive preview</strong> · Fictional sample movies. Search, open a title, and save favorites in this browser.
      Accounts and live TMDB results require the <a href="https://github.com/mustafa-sarwari/movie-explorer#run-locally">Node.js backend</a>.
    </aside>}

    <main className="main-content">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MoviePlayer />} />
      </Routes>
    </main>
  </MovieProvider>
 )
}

export default App;
