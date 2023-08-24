import { useEffect } from "react";
import { fetchAPI } from "../../utility/fetchAPI";
import { useDispatch, useSelector } from "react-redux";
import { getBannerMovies } from "../../redux_App/BannerMovie";
import { sliceArray, randomElement } from "../../utility/sliceArray";
import { AiFillStar, AiFillYoutube } from "react-icons/ai";
import "./home.scss";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";

const Home = ({ setBgimg }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.homePage);
  useEffect(() => {
    if (loading === "idle") {
      dispatch(getBannerMovies());
    }
  }, [loading, dispatch]);

  let HomeContent;
  if (loading === "pending") {
    HomeContent = (
      <div className="loader">
        <h1>Loading</h1>
      </div>
    );
  } else if (loading === "success") {
    // Sort the posts by id in descending order

    let sortedArr = randomElement(sliceArray(data.results, 0, 5));
    console.log(sortedArr);
    setBgimg(sortedArr.poster_path);
    // Map through the sorted posts and display them
    HomeContent = (
      <div className="home-banner margin-Top">
        <div
          className="home-img_poster"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${sortedArr.poster_path})`,
          }}
        ></div>
        <div className="home-details">
          <h3>{sortedArr.title}</h3>
          <span>2023,&nbsp; Movie/TV.</span>
          &nbsp;&nbsp;&nbsp;
          <AiFillStar />
          <span> 8.15</span>
          <div className="video-tab" role="button">
            <AiFillYoutube />

            <span>Watch Trailer</span>
          </div>
          <p>
            <i>{sortedArr.overview}</i>
          </p>
          <p>Duration: 1.8 hrs</p>
          <p>Release Date: {sortedArr.release_date}</p>
        </div>
      </div>
    );
  } else {
    HomeContent = <div>Error...</div>;
  }

  return (
    <>
      <main>{HomeContent}</main>
      <Section category="Popular" />
      <hr />
      <Footer />
    </>
  );
};

export default Home;
