import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import MovieDetailCard from "./pages/MovieCard/MovieDetailCard";
import SeriesDetailCard from "./pages/SeriesDetailCard/SeriesDetailCard";
import Movie from "./pages/Movie/Movie";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Search from "./pages/Search/Search";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route
            path="/movies/:id"
            element={<MovieDetailCard />}
            key={location.key}
          />
          <Route
            path="/series/:id"
            element={<SeriesDetailCard />}
            key={location.key}
          />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
