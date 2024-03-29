import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//create async thunk
export const getCast = createAsyncThunk("getCast", async (id) => {
  const btoken = import.meta.env.VITE_APP_BTOKEN;
  const headers = { Authorization: `Bearer ${btoken}` };
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      { headers }
    );
    const data1 = await response.data;

    return data1;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
});

const castDetails = createSlice({
  name: "castDetails",
  initialState: { castdata: [], cast_loading: "idle", error: null },
  extraReducers: {
    [getCast.pending]: (state) => {
      state.cast_loading = "pending";
    },
    [getCast.fulfilled]: (state, action) => {
      state.cast_loading = "success";
      state.castdata = action.payload;
    },
    [getCast.rejected]: (state, action) => {
      state.cast_loading = "failed";
      state.error = action.payload;
    },
  },
});

export default castDetails.reducer;
