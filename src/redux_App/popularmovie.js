import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//create async thunk
export const popMovieDet = createAsyncThunk("popular", async () => {
  const btoken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjNjZDk4NjllZDRkMmM2ZjM2YWEwZTdkNDg1YjVmMyIsInN1YiI6IjY0ZTAzN2FhMzcxMDk3MDBlMjI5NzczNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BGWeWXQfn91oQ7a4jYLZM3AoeB9ktgDcbZ12vkHoSxk";
  const headers = { Authorization: `Bearer ${btoken}` };
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      { headers }
    );
    const data1 = await response.data;

    return data1;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
});

const popMovies = createSlice({
  name: "popMovies",
  initialState: { data: [], loading: "idle", error: null },
  extraReducers: {
    [popMovieDet.pending]: (state) => {
      state.loading = "pending";
    },
    [popMovieDet.fulfilled]: (state, action) => {
      state.loading = "success";
      state.data = action.payload;
    },
    [popMovieDet.rejected]: (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    },
  },
});

export default popMovies.reducer;
