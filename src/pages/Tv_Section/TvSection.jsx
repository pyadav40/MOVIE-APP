import "./tvsection.scss";
import { useEffect } from "react";
import { getTvSeries } from "../../redux_App/TvServies";
import { sliceArray } from "../../utility/sliceArray";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import MovieCard from "../../Components/Card_Movie/MovieCard";
import { Link } from "react-router-dom";

const TvSection = ({ category }) => {
  let sortedPosts = [];
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.TvServies);
  console.log("series", loading, data);
  useEffect(() => {
    dispatch(getTvSeries("https://api.themoviedb.org/3/trending/tv/day"));
  }, [dispatch]);
  if (!loading) {
    sortedPosts = sliceArray(data.results, 0, 5);
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
            View More <AiOutlineDoubleRight />
          </div>
        </div>
        <div className="card-wrapper">
          {loading ? (
            <Loader />
          ) : (
            sortedPosts.map((item) => (
              <MovieCard
                key={item.id}
                poster_path={item.poster_path}
                original_title={item.original_title}
                overview={item.overview}
                vote_average={item.vote_average}
                id={item.id}
                category_ms="series"
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TvSection;
