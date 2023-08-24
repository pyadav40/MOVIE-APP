import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import Movie from "./Components/Movies/Movie";
import Home from "./pages/Home/Home";
function App() {
  const [img, setBgimg] = useState("");
  // const [name, setName] = useState("batman");
  // const [movieData, setMovieData] = useState([]);
  // const url = `https://api.themoviedb.org/3/search/movie?query=${name}`;
  // const debounce = (func, delay) => {
  //   let timer;
  //   return function (...arg) {
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func(...arg);
  //     }, delay);
  //   };
  // };
  // // const onChange = (e) => {
  // //   setName(e.target.value);
  // // };
  // // const debounceChnage = debounce(onChange, 2000);

  // useEffect(() => {
  //   const fetch = async () => {
  //     const data = await fetchAPI(url);
  //     setMovieData(data.results);
  //   };
  //   fetch();
  // }, [name]);

  return (
    <>
      <div
        className="wrapper"
        style={{
          background: `linear-gradient(
            310deg,
            rgba(63, 66, 66, 0.232913148169424) 0%,
            rgba(11, 11, 58, 1) 69%
          ), url(https://image.tmdb.org/t/p/original/${img})`,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setBgimg={setBgimg} />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
