import { useState, useEffect } from "react";
import { popMovieDet } from "../../redux_App/popularmovie.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./movie.scss";
const Movie = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.movieApp);
  const handleClick = (e) => {
    const pageNum = parseInt(e.target.value);
    setPage(pageNum);
  };

  useEffect(() => {
    dispatch(
      popMovieDet(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`
      )
    );
  }, [page]);
  let movieContent;
  if (loading === "pending") {
    movieContent = <div>Loading..........</div>;
  } else if (loading === "success") {
    console.log("pages", data);
    movieContent = (
      <div>
        <button onClick={handleClick} value="1">
          1
        </button>
        <button onClick={handleClick} value="2">
          2
        </button>
        <button onClick={handleClick} value="3">
          3
        </button>
        <button onClick={handleClick} value="4">
          4
        </button>
      </div>
    );
  } else {
    movieContent = <div>{error}</div>;
  }

  return <>{movieContent}</>;
};

export default Movie;
