import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const setCategory = createAsyncThunk(
//     'profile/category
//     (category) => {
//         return category
//     }
// )
const initialState = {
    category: "Profile",
}
export const profileSlice = createSlice({
    name: 'profileReducer',
    initialState,
    reducers: {
        setCategory: (state, action) => {
                state.category = action.payload
        }
    }
})

export const {setCategory} = profileSlice.actions

export default profileSlice.reducer;
