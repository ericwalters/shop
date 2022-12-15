import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0, // todo: quantity is probably unneeded, can just use cartItems.length
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      // todo: is there a more efficient way to check the list for duplicates?
      let hasDuplicate = state.cartItems.filter(
        (item) => item.id === action.payload.id
      ).length;
      if (!hasDuplicate) {
        state.quantity += 1;
        state.cartItems.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        const hasItem = item.id === action.payload.id;
        if (hasItem) {
          state.quantity -= 1;
        }
        return hasItem;
      });
    },
  },
});

export const { add, remove } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const cartCount = (state) => state.cart.quantity;
export const itemsInCart = (state) => state.cart.cartItems;

export default cartSlice.reducer;
