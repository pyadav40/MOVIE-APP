import "./card.scss";
import { Link } from "react-router-dom";
import { AiFillStar, AiTwotoneHeart } from "react-icons/ai";
const MovieCard = ({
  poster_path,
  overview,
  original_title,
  vote_average,
  id,
}) => {
  return (
    <Link to={`/movies/${id}`}>
      <div
        className="card-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        <div className="rat-heart">
          <div className="rating">
            <AiFillStar />
            <span>{vote_average}</span>
          </div>
          <AiTwotoneHeart className="heart-icon" />
        </div>
        <div className="container_detail">
          <h3>{original_title}</h3>
          <p>{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
