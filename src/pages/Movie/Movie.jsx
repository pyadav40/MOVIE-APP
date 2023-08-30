import React, { useState, useEffect } from "react";
import { popMovieDet } from "../../redux_App/popularmovie.js";
import { useDispatch, useSelector } from "react-redux";

import MovieCard from "../../Components/Card_Movie/MovieCard.jsx";
import PageCounter from "../../Components/PageCounter/PageCounter.jsx";
import "./movie.scss";
import Loader from "../../Components/Loader/Loader.jsx";
const Movie = () => {
  const [countPage, setcountPage] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.movieApp);
  console.log("moviePage", countPage);
  useEffect(() => {
    dispatch(
      popMovieDet(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${countPage}`
      )
    );
  }, [countPage, dispatch]);
  let movieContent;
  if (loading === "pending") {
    movieContent = <Loader />;
  } else if (loading === "success") {
    console.log("pages", data);

    movieContent = (
      <>
        <MemoizedPageCounter setcountPage={setcountPage} />
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
        <MemoizedPageCounter setcountPage={setcountPage} />
      </>
    );
  } else {
    movieContent = <div>{error}</div>;
  }

  return <>{movieContent}</>;
};
const MemoizedPageCounter = React.memo(PageCounter);

export default Movie;
