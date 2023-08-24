import { useEffect } from "react";
import MovieCard from "../../Components/Card_Movie/MovieCard";
import { popMovieDet } from "../../redux_App/popularmovie.js";
import { sliceArray } from "../../utility/sliceArray";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./section.scss";
const Section = ({ category }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.movieApp);
  useEffect(() => {
    if (loading === "idle") {
      dispatch(popMovieDet());
    }
  }, [loading, dispatch]);

  let bodyContent;

  if (loading === "pending") {
    bodyContent = (
      <div className="loader">
        <h1>Loading</h1>
      </div>
    );
  } else if (loading === "success") {
    // Sort the posts by id in descending order
    const sortedPosts = sliceArray(data.results, 0, 5);

    // Map through the sorted posts and display them
    bodyContent = sortedPosts.map((item) => (
      <MovieCard
        key={item.id}
        poster_path={item.poster_path}
        original_title={item.original_title}
        overview={item.overview}
        vote_average={item.vote_average}
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
            <a href="#">
              View More <AiOutlineDoubleRight />
            </a>
          </div>
        </div>
        <div className="card-wrapper">{bodyContent}</div>
      </div>
    </section>
  );
};

export default Section;
