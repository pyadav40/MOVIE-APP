import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//create async thunk
export const getCastSeries = createAsyncThunk("getCastSeries", async (id) => {
  const btoken = import.meta.env.VITE_APP_BTOKEN;
  const headers = { Authorization: `Bearer ${btoken}` };
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits`,
      { headers }
    );
    const data = await response.data;

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
});

const castDetailSeries = createSlice({
  name: "castDetailSeries",
  initialState: { data: [], loading: true, error: null },
  extraReducers: {
    [getCastSeries.pending]: (state) => {
      state.loading = true;
    },
    [getCastSeries.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getCastSeries.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default castDetailSeries.reducer;
