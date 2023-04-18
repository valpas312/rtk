import { createSlice } from "@reduxjs/toolkit";

import { addAProduct, removeAProduct } from "../utils";

const initialState = {
    cart: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cart = addAProduct(state.cart, action.payload);
        },
        removeProduct: (state, action) => {
            state.cart = removeAProduct(state.cart, action.payload);
        },
        cleanCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addProduct, removeProduct, cleanCart } = productsSlice.actions;

export default productsSlice.reducer;