import { useEffect } from "react";
import "./tvcast.scss";
import { useParams } from "react-router-dom";
import { getCastSeries } from "../../redux_App/CastSeries";
import { useDispatch, useSelector } from "react-redux";
import { sliceArray } from "../../utility/sliceArray";
import Avatar from "../../Components/Avatar/Avatar";
import Loader from "../../Components/Loader/Loader";
const TvCast = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.castDetailSeries
  );

  useEffect(() => {
    dispatch(getCastSeries(id));
  }, [id]);
  let arrSorted;
  if (!loading) {
    arrSorted = sliceArray(data.cast, 0, 6);
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default TvCast;
