import { useEffect } from "react";
import "./cast.scss";
import { useParams } from "react-router-dom";
import { getCast } from "../../redux_App/CastMovie";
import { useDispatch, useSelector } from "react-redux";
import { sliceArray } from "../../utility/sliceArray";

const Avatar = ({ img_avatar, cast_name }) => {
  console.log("avtar comp", img_avatar, cast_name);
  return (
    <>
      <div className="avatar-container">
        <div className="img-avatar">
          <img
            src={`https://image.tmdb.org/t/p/w500/${img_avatar}`}
            alt="avatar"
          />
        </div>
        <p>{cast_name}</p>
      </div>
    </>
  );
};

const Cast = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { castdata, cast_loading, error } = useSelector(
    (state) => state.castDetails
  );

  useEffect(() => {
    dispatch(getCast(id));
  }, [id]);

  let castContent;

  if (cast_loading === "pending") {
    castContent = (
      <div className="loader">
        <h1>Loading</h1>
      </div>
    );
  } else if (cast_loading === "success") {
    const arrSorted = sliceArray(castdata.cast, 0, 6);

    castContent = (
      <section>
        <div className="cast-container">
          {arrSorted.map((itemCast) => (
            <Avatar
              key={itemCast.credit_id}
              img_avatar={itemCast.profile_path}
              cast_name={itemCast.original_name}
            />
          ))}
        </div>
      </section>
    );
  } else {
    // Display the error message
    castContent = <div>{error}</div>;
  }

  return <>{castContent}</>;
};

export default Cast;
