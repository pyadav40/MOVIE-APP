import { useEffect } from "react";
import { getSeriesDetails } from "../../redux_App/SeriesDetails";
import { findGenres } from "../../utility/sliceArray";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Loader from "../../Components/Loader/Loader";
import TvCast from "./TvCast";
const SeriesDetailCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.seriesDetails);

  useEffect(() => {
    dispatch(getSeriesDetails(id));
  }, [id]);

  let gen;
  let relDate;
  if (!loading) {
    console.log(id, data);
    const { genres } = data;
    gen = findGenres(genres);
    relDate = data.last_air_date.slice(0, 4);
  }
  return (
    <>
      <main>
        {loading ? (
          <Loader />
        ) : (
          <div
            className="movie-details-container"
            style={{
              backgroundImage: `linear-gradient(92deg, hsla(240, 88%, 3%, 1) 30%, hsla(186, 100%, 50%, 0.56) 100%), url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
            }}
          >
            <div className="container-detail-top">
              <div className="detail-movie_title">{data.name}</div>
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
                  {data.vote_average.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="container-detail-bottom">
              <div className="detail-movie_title">
                <p>{data.overview}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <TvCast />
    </>
  );
};

export default SeriesDetailCard;
