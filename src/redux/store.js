import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice, { loadAuth } from "./slices/authSlice";

const rootReducer = combineReducers({
    auth: authSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

store.dispatch(loadAuth());