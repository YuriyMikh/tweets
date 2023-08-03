import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk, updateUserThunk } from "./operations";

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
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }).addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true;
      })
  },
});

export const usersReducer = usersSlice.reducer;
