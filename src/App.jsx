import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import MovieDetailCard from "./pages/MovieCard/MovieDetailCard";
import Movie from "./pages/Movie/Movie";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
