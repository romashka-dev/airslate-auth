import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialSlateProps {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialSlate: InitialSlateProps = {
  email: null,
  token: null,
  id: null
}

const userSlice = createSlice({
  name: "user",
  initialState: initialSlate,
  reducers: {
    setUser(state, action: PayloadAction<{ email: string | null; token: string | null; id: string | null }>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const UserReducer = userSlice.reducer;