import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTvSeries = createAsyncThunk("Tvservies", async (url) => {
  const btoken = import.meta.env.VITE_APP_BTOKEN;
  const headers = { Authorization: `Bearer ${btoken}` };
  try {
    const response = await axios.get(url, { headers });
    const data = await response.data;

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
});

const tvServies = createSlice({
  name: "tvServies",
  initialState: { data: [], loading: true, error: null },
  extraReducers: {
    [getTvSeries.pending]: (state) => {
      state.loading = true;
    },
    [getTvSeries.fulfilled]: (state, action) => {
      (state.loading = false), (state.data = action.payload);
    },
    [getTvSeries.rejected]: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
  },
});

export default tvServies.reducer;
