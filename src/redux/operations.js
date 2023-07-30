import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchUsers} from "../API/api";

export const getUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await fetchUsers();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
