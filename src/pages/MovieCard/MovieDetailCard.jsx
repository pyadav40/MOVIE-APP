import { useEffect } from "react";
import { findGenres } from "../../utility/sliceArray";
import { getMovieDetails } from "../../redux_App/MovieDetails";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import "./MovieDetailCard.scss";
import Cast from "./Cast";
const MovieDetailCard = () => {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const { moviedata, loading, error } = useSelector(
    (state) => state.movieDetails
  );

  useEffect(() => {
    console.log("id", id);
    dispatch(getMovieDetails(id));
  }, [id]);

  let bodyContent;

  if (loading === "pending") {
    bodyContent = <Loader />;
  } else if (loading === "success") {
    // Sort the posts by id in descending  order
    console.log("movies", moviedata);
    const { genres } = moviedata;
    const gen = findGenres(genres);
    const titleArray = moviedata.title.split(":");
    const relDate = moviedata.release_date.slice(0, 4);
    let titleBody;
    if (titleArray.length <= 1) {
      titleBody = <span>{moviedata.title}</span>;
    } else {
      titleBody = (
        <>
          <span>{titleArray[0]}:</span>
          <span>{titleArray[1]}</span>
        </>
      );
    }
    bodyContent = (
      <div
        className="movie-details-container"
        style={{
          backgroundImage: `linear-gradient(92deg, hsla(240, 88%, 3%, 1) 30%, hsla(186, 100%, 50%, 0.56) 100%), url(https://image.tmdb.org/t/p/original/${moviedata.backdrop_path})`,
        }}
      >
        <div className="container-detail-top">
          <div className="detail-movie_title">{titleBody}</div>
          <div className="detail-movie_lang">
            <div className="lang_genre">
              <span>{gen}</span>
            </div>
          </div>
          <div className="detail-movie_lang">
            <div className="lang_title">
              <h4>{relDate}</h4>
            </div>
            <div className="top_vote">
              <div className="vote-icon">
                <AiFillStar />
              </div>
              {moviedata.vote_average.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="container-detail-bottom">
          <div className="detail-movie_title">
            <p>{moviedata.overview}</p>
          </div>
        </div>
      </div>
    );
  } else {
    // Display the error message
    bodyContent = <div>{error}</div>;
  }
  console.log("movie", moviedata);
  return (
    <>
      <main>{bodyContent}</main>
      <Cast />
    </>
  );
};

export default MovieDetailCard;
