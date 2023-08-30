import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//create async thunk
export const popMovieDet = createAsyncThunk("popular", async (url) => {
  const btoken = import.meta.env.VITE_APP_BTOKEN;
  const headers = { Authorization: `Bearer ${btoken}` };
  try {
    const response = await axios.get(url, { headers });
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
  reducers: {
    reset: (state) => {
      state.loading = "idle";
      state.data = [];
    },
  },
});
export const { reset } = popMovies.actions;
export default popMovies.reducer;
