import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getUsersThunk.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const usersReducer = usersSlice.reducer;
