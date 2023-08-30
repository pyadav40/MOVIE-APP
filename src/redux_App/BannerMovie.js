import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getBannerMovies = createAsyncThunk("Banner", async () => {
  const btoken = import.meta.env.VITE_APP_BTOKEN;
  const headers = { Authorization: `Bearer ${btoken}` };
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      { headers }
    );
    const data1 = await response.data;

    return data1;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
});

const bannerSlice = createSlice({
  name: "bannerSlice",
  initialState: { data: [], loading: "idle", error: null },
  extraReducers: {
    [getBannerMovies.pending]: (state) => {
      state.loading = "pending";
    },
    [getBannerMovies.fulfilled]: (state, action) => {
      state.loading = "success";
      state.data = action.payload;
    },
    [getBannerMovies.rejected]: (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    },
  },
});

export default bannerSlice.reducer;
