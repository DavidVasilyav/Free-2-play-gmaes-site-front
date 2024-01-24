import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    darkOrLight: false,
}

export const darkOrlightSlice = createSlice({
    name: 'setDarkLightTheme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.darkOrLight = action.payload
        }
    }
})

export const {setTheme} = darkOrlightSlice.actions

export default darkOrlightSlice.reducer