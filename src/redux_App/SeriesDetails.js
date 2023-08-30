import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getSeriesDetails = createAsyncThunk(
  "getSeriesDetails",
  async (id) => {
    const btoken = import.meta.env.VITE_APP_BTOKEN;
    const headers = { Authorization: `Bearer ${btoken}` };
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}`,
        { headers }
      );
      const data = await response.data;

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  }
);

const seriesDetails = createSlice({
  name: "seriesDetails",
  initialState: { data: [], loading: true, error: null },
  extraReducers: {
    [getSeriesDetails.pending]: (state) => {
      state.loading = true;
    },
    [getSeriesDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getSeriesDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default seriesDetails.reducer;
