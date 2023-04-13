import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/userType';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';
// import { User } from '../types/userType';

// interface UserState {
//   user: User | null;
// }

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     user: null,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });

// export const { setUser } = userSlice.actions;

// export default userSlice.reducer;