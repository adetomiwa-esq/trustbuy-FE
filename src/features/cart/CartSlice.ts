import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { cartItems } from "../../mock/Cart";
import type { CartItem } from "./types";

interface CartState {

    items: CartItem[];

    loading: boolean;

    error: string | null;

}

const initialState: CartState = {

    items: cartItems,

    loading: false,

    error: null,

};


const cartSlice = createSlice({

    name: "cart",

    initialState,

    reducers: {
        increaseQuantity(

            state,

            action: PayloadAction<number>

        ) {

            const item = state.items.find(

                item => item.id === action.payload

            );

            if (!item) return;

            if (item.quantity < item.stock) {

                item.quantity++;

            }

        },

        decreaseQuantity(

            state,

            action: PayloadAction<number>

        ) {

            const item = state.items.find(

                item=>item.id===action.payload

            );

            if(!item)return;

            if(item.quantity>1){

                item.quantity--;

            }

        },

        removeItem(

            state,

            action:PayloadAction<number>

        ) {

            state.items=

            state.items.filter(

                item=>item.id!==action.payload

            );

        },
    },

});

export const {

    increaseQuantity,

    decreaseQuantity,

    removeItem,

} = cartSlice.actions;

export default cartSlice.reducer;