import { useState, useEffect } from "react";
import { getSearchMovie } from "../../redux_App/SearchMovie";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../Components/Card_Movie/MovieCard";
import Loader from "../../Components/Loader/Loader";
import "./search.scss";
const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.searchMovie);
  ///////take input/////////
  const handle = (e) => {
    setInput(e.target.value);
  };
  ////////deboucing to delay the input///////
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const debounceHandle = debounce(handle, 2000);
  //////useEffect for search
  useEffect(() => {
    dispatch(getSearchMovie(input));
  }, [input, dispatch]);

  return (
    <>
      <div className="search_container">
        <input
          onChange={debounceHandle}
          type="text"
          className="search_input"
          placeholder="Search..."
        />
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </>
  );
};

export default Search;
