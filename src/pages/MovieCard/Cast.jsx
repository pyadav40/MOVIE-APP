import { useEffect } from "react";
import "./cast.scss";
import { useParams } from "react-router-dom";
import { getCast } from "../../redux_App/CastMovie";
import { useDispatch, useSelector } from "react-redux";
import { sliceArray } from "../../utility/sliceArray";
import Avatar from "../../Components/Avatar/Avatar";
import Loader from "../../Components/Loader/Loader";

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
    castContent = <Loader />;
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
