import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "../reducers/counterSlice";
import { productsSlice } from "../reducers/productsSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({
    counter: counterSlice.reducer,
    products: productsSlice.reducer
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);