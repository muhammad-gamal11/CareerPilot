import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkApi) => {}
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkApi) => {}
);

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
