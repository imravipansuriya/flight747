import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem("token") || null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // ✅ Save token in localStorage
      // localStorage.setItem("user", action.payload); // ✅ Save token in localStorage
    },
    logoutUser: (state) => {
        state.token = null;
        localStorage.removeItem("token"); // ✅ Remove token on logout  
        localStorage.clear();
    },
  },
});

export const { setToken, logoutUser } = authSlice.actions;
export default authSlice.reducer;
