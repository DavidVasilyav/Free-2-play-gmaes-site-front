import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./reducers/userAuthReducer";
import profileSliceReducer from './reducers/changeCategory'
// import { persistReducer, persistStore } from 'redux-persist';

export default configureStore({
    reducer: {
        userAuth: userAuthReducer,
        profileState: profileSliceReducer,
    }
})