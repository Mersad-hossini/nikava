import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;