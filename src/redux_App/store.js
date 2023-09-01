import { configureStore } from "@reduxjs/toolkit";
import popMovies from "./popularmovie";
import bannerSlice from "./BannerMovie";
import movieDetails from "./MovieDetails";
import castDetails from "./CastMovie";
import searchMovie from "./SearchMovie";
import TvServies from "./TvServies";
import castDetailSeries from "../redux_App/CastSeries";
import seriesDetails from "./SeriesDetails";
import VideoPlay from "./VideoPlay";
export const store = configureStore({
  reducer: {
    movieApp: popMovies,
    homePage: bannerSlice,
    movieDetails: movieDetails,
    castDetails: castDetails,
    searchMovie: searchMovie,
    TvServies: TvServies,
    seriesDetails: seriesDetails,
    castDetailSeries: castDetailSeries,
    VideoPlay: VideoPlay,
  },
});
