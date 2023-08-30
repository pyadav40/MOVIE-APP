import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//create async thunk
export const getMovieDetails = createAsyncThunk("movieDetails", async (id) => {
  const btoken = import.meta.env.VITE_APP_BTOKEN;
  const headers = { Authorization: `Bearer ${btoken}` };
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      { headers }
    );
    const data1 = await response.data;

    return data1;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
});

const movieDetails = createSlice({
  name: "movieDetails",
  initialState: { moviedata: [], loading: "idle", error: null },
  extraReducers: {
    [getMovieDetails.pending]: (state) => {
      state.loading = "pending";
    },
    [getMovieDetails.fulfilled]: (state, action) => {
      state.loading = "success";
      state.moviedata = action.payload;
    },
    [getMovieDetails.rejected]: (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    },
  },
});

export default movieDetails.reducer;
