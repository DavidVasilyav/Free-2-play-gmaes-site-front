import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    darkOrLight: Boolean,
}

export const darkOrlightSlice = createSlice({
    name: 'setDarkLightTheme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.darkOrLight = action.payload
            console.log(state.darkOrLight);
        }
    }
})

export const {setTheme} = darkOrlightSlice.actions

export default darkOrlightSlice.reducer