import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import {
  LoginByEmailAndPassword,
  RegisterUserService,
} from "../../services/authService";
import userFavoriteList from "../../services/userFavoriteList";
import removeFromFavoriteList from "../../services/removeFromFavoriteList";

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ username, password }, {rejectWithValue}) => {
    try {
      const res = await LoginByEmailAndPassword(username, password);
      console.log(res.data);
      return res.data
    } catch (error) {
      if(error.code == 'ERR_NETWORK'){
        return rejectWithValue('Network Error')
      }    
      return rejectWithValue(error.response.data)
    }
  }
);

export const registerUser = createAsyncThunk(
  "users/register",
  async ({ username, password, email, firstName, lastName, age }, {rejectWithValue }) => {
    try {
    const res = await RegisterUserService(
      username,
      password,
      email,
      firstName,
      lastName,
      age
    )
    return res.data
  } catch (error) {
    return rejectWithValue(error.response.data || 'server error')
  }
  }
);

export const changeUserInfo = createAsyncThunk(
  'users/changeInfo',
  async (data) => {
  }
)



export const addGame = createAsyncThunk(
  "users/addGame",
  async ({ id, game_id, title, thumbnail, gameUrl, gameGenre }) => {
    const res = await LoginByEmailAndPassword(
      id,
      game_id,
      title,
      gameGenre,
      gameUrl,
      thumbnail
    );
    return res.data;
  }
);
export const getUserFavoriteList = createAsyncThunk(
  "users/favoriteList",
  async (_id) => {
    const res = await userFavoriteList(_id);
    return res.data;
  }
);

export const removeFromList = createAsyncThunk(
  "users/favoriteListRemove",
  async (data) => {
    const res = await removeFromFavoriteList(data);
    return res.data;
  }
);
const initialState = {
  user: [],
  error: "",
  loading: false,
  token: "",
  favoriteList: [],
};
export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    restSlice: (state, action) => {
      return initialState;
    },
    logoutReducer: (state, action) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.user = {};
    },
    checkIfTokenExist: (state, action) => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("no token");
      } else {
        console.log("token");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(loginUser.rejected, (state, action) => {
        console.log(action.payload);
          state.error = action.payload.error || action.payload
        state.loading = false;
      }),
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("token", state.user.token);
        localStorage.setItem("user", JSON.stringify(state.user));
      }),
      builder.addCase(registerUser.pending, (state, action) => {
        state.loading = true;

      }),
        builder.addCase(registerUser.rejected, (state, action) => {
          console.log(action);
        state.loading = false;
        state.error = action.payload.error

        }),
        builder.addCase(registerUser.fulfilled, (state, action) => {
          state.loading = 'success';
          console.log(state.loading);
          // state.user = action.payload;
          // localStorage.setItem("token", state.user.token);
          // localStorage.setItem("user", JSON.stringify(state.user));
        });
      builder.addCase(getUserFavoriteList.fulfilled, (state, action) => {
        console.log(action.payload.favoriteList);
        state.favoriteList = action.payload.favoriteList;
      }),
      builder.addCase(removeFromList.fulfilled, (state, action) => {
        // state.favoriteList = action.payload
        console.log(123);
      });
   
  },
});

export const { logoutReducer, restSlice } = authSlice.actions;

export default authSlice.reducer;
