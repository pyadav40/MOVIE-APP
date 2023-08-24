import { configureStore } from "@reduxjs/toolkit";
import popMovies from "./popularmovie";
import bannerSlice from "./BannerMovie";
export const store = configureStore({
  reducer: {
    movieApp: popMovies,
    homePage: bannerSlice,
  },
});
