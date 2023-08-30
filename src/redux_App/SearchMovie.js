import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//create async thunk
export const getSearchMovie = createAsyncThunk(
  "getSearchMovie",
  async (searchString) => {
    const btoken = import.meta.env.VITE_APP_BTOKEN;
    const headers = { Authorization: `Bearer ${btoken}` };
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&include_adult=false`;
    try {
      const response = await axios.get(url, { headers });
      const data = await response.data;
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  }
);

const searchMovie = createSlice({
  name: "searchMovie",
  initialState: { data: [], loading: true, error: null },
  extraReducers: {
    [getSearchMovie.pending]: (state) => {
      state.loading = true;
    },
    [getSearchMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getSearchMovie.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default searchMovie.reducer;
