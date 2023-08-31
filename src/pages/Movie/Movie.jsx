import { useEffect } from "react";
import { popMovieDet } from "../../redux_App/popularmovie.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieCard from "../../Components/Card_Movie/MovieCard.jsx";
import PageCounter from "../../Components/PageCounter/PageCounter.jsx";
import "./movie.scss";
import Loader from "../../Components/Loader/Loader.jsx";
const Movie = () => {
  const { pageChange } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.movieApp);

  useEffect(() => {
    dispatch(
      popMovieDet(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageChange}`
      )
    );
  }, [pageChange, dispatch]);
  let movieContent;
  if (loading === "pending") {
    movieContent = <Loader />;
  } else if (loading === "success") {
    console.log("pages", data);

    movieContent = (
      <div className="search-card-wrapper">
        {data.results.map((item) => (
          <MovieCard
            key={item.id}
            poster_path={item.poster_path}
            overview={item.overview}
            original_title={item.title}
            vote_average={item.vote_average}
            id={item.id}
            category_ms="movies"
          />
        ))}
      </div>
    );
  } else {
    movieContent = <div>{error}</div>;
  }

  return (
    <>
      <PageCounter />
      {movieContent}
    </>
  );
};

export default Movie;
