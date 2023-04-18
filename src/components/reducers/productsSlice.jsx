import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cart.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
        },
        cleanCart: (state) => {
            state.cart = [];
        },
    },
});