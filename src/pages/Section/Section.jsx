import { useEffect } from "react";
import MovieCard from "../../Components/Card_Movie/MovieCard";
import Loader from "../../Components/Loader/Loader";
import { popMovieDet } from "../../redux_App/popularmovie.js";
import { sliceArray } from "../../utility/sliceArray";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./section.scss";
import { Link } from "react-router-dom";
const Section = ({ category }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.movieApp);
  useEffect(() => {
    if (loading === "idle") {
      dispatch(
        popMovieDet(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        )
      );
    }
  }, [loading, dispatch]);

  let bodyContent;

  if (loading === "pending") {
    bodyContent = <Loader />;
  } else if (loading === "success") {
    // Sort the posts by id in descending order
    const sortedPosts = sliceArray(data.results, 5, 10);
    console.log("section", sliceArray(data.results, 0, 5));
    // Map through the sorted posts and display them
    bodyContent = sortedPosts.map((item) => (
      <MovieCard
        key={item.id}
        poster_path={item.poster_path}
        original_title={item.original_title}
        overview={item.overview}
        vote_average={item.vote_average}
        id={item.id}
        category_ms="movies"
      />
    ));
  } else {
    // Display the error message
    bodyContent = <div>{error}</div>;
  }

  return (
    <section>
      <div className="section1">
        <div className="heading">
          <div className="box-one">
            <h1>{category}</h1>
            <AiOutlineDoubleRight />
          </div>
          <div className="box-one right">
            <Link to="/movie">
              View More <AiOutlineDoubleRight />
            </Link>
          </div>
        </div>
        <div className="card-wrapper">{bodyContent}</div>
      </div>
    </section>
  );
};

export default Section;
