import { createSlice } from "@reduxjs/toolkit"

// interface UserSliceState {
//     // host is the user who hist the system
//     host?: User;
//     // user is the user who is currently logged in
//     user?: User;
//     userById: { [key: UserId]: User };
//   }

const initialState = {userById: {}} // as UserSliceState

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {}
})

export default userSlice.reducer;
