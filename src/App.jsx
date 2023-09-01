import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import SeriesDetailCard from "./pages/SeriesDetailCard/SeriesDetailCard";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Search from "./pages/Search/Search";
import Contact from "./pages/Contact/Contact";
import Loader from "./Components/Loader/Loader";
const LazyMovie = lazy(() => import("./pages/Movie/Movie"));
const LazyMovieDetailCard = lazy(() =>
  import("./pages/MovieCard/MovieDetailCard")
);
const LazySeriesDetailCard = lazy(() =>
  import("./pages/SeriesDetailCard/SeriesDetailCard")
);
function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movie/:pageChange"
            element={
              <Suspense fallback={<Loader />}>
                <LazyMovie />
              </Suspense>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <Suspense fallback={<Loader />}>
                <LazyMovieDetailCard />
              </Suspense>
            }
            key={location.key}
          />
          <Route
            path="/series/:id"
            element={
              <Suspense fallback={<Loader />}>
                <LazySeriesDetailCard />
              </Suspense>
            }
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
