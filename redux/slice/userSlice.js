import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isAuthenticated: false,
  role: null,
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    addRole: (state, action) => {
      state.role = action.payload;
    },
    removeRole: (state) => {
      state.role = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    removeLoading: (state) => {
      state.loading = false;
    }
  }
})

export const { login, logout, addRole, removeRole, setLoading, removeLoading } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;