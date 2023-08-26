import { configureStore } from "@reduxjs/toolkit";
import popMovies from "./popularmovie";
import bannerSlice from "./BannerMovie";
import movieDetails from "./MovieDetails";
import castDetails from "./CastMovie";
export const store = configureStore({
  reducer: {
    movieApp: popMovies, //
    homePage: bannerSlice,
    movieDetails: movieDetails,
    castDetails: castDetails,
  },
});
