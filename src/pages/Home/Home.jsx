import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerMovies } from "../../redux_App/BannerMovie";
import { sliceArray, randomElement } from "../../utility/sliceArray";
import { AiFillStar, AiFillYoutube } from "react-icons/ai";
import "./home.scss";
import Section from "../Section/Section";
import Loader from "../../Components/Loader/Loader";
import TvSection from "../Tv_Section/TvSection";
import VideoPlayer from "../../Components/Videoplayer/VideoPlayer";
const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.homePage);
  useEffect(() => {
    if (loading === "idle") {
      dispatch(getBannerMovies());
    }
  }, [loading, dispatch]);

  let HomeContent;
  if (loading === "pending") {
    HomeContent = <Loader />;
  } else if (loading === "success") {
    // Sort the posts by id in descending order
    console.log("home", data.results);
    let sortedArr = randomElement(sliceArray(data.results, 0, 10));
    // Map through the sorted posts and display them
    HomeContent = (
      <>
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/original/${sortedArr.backdrop_path}`}
        />
        <div className="home-banner margin-Top">
          <div
            className="home-img_poster"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w342/${sortedArr.poster_path})`,
            }}
          ></div>
          <div className="home-details">
            <h3>{sortedArr.title}</h3>
            <span>2023,&nbsp; Movie/TV.</span>
            &nbsp;&nbsp;&nbsp;
            <AiFillStar />
            <span> 8.15</span>
            <VideoPlayer id={sortedArr.id} />
            <p>
              <i>{sortedArr.overview}</i>
            </p>
            <p>Duration: 1.8 hrs</p>
            <p>Release Date: {sortedArr.release_date}</p>
          </div>
        </div>
      </>
    );
  } else {
    HomeContent = <div>Error...</div>;
  }

  return (
    <>
      <main>{HomeContent}</main>

      <Section category="Popular" />
      <hr />
      <TvSection category="Series" />
    </>
  );
};

export default Home;
