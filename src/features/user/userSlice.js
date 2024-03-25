import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
  clearStoreThunk,
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkApi) => {
    return registerUserThunk("./auth/register", user, thunkApi);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkApi) => {
    return loginUserThunk("/auth/login", user, thunkApi);
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkApi) => {
    return updateUserThunk("/auth/updateUser", user, thunkApi);
  }
);

export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false; // Change to false as the request is fulfilled
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There , ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false; // Handle rejection similarly to fulfilled
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false; // Change to false as the request is fulfilled
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back , ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false; // Handle rejection similarly to fulfilled
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false; // Change to false as the request is fulfilled
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`User Updated`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false; // Handle rejection similarly to fulfilled
        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error("There was an error");
      });
  },
});
export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
