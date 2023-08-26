import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//create async thunk
export const getMovieDetails = createAsyncThunk("movieDetails", async (id) => {
  const btoken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjNjZDk4NjllZDRkMmM2ZjM2YWEwZTdkNDg1YjVmMyIsInN1YiI6IjY0ZTAzN2FhMzcxMDk3MDBlMjI5NzczNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BGWeWXQfn91oQ7a4jYLZM3AoeB9ktgDcbZ12vkHoSxk";
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
