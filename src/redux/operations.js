import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, updateUser } from "../API/api";

export const getUsersThunk = createAsyncThunk(
  "users/fetchAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await fetchUsers();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/updateUser",
  async ({ id, user }, thunkAPI) => {
    try {
      const response = await updateUser({ id, user });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
