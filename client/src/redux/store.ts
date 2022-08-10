import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";

import productModalSlice from './product-modal/product-modal-slice';
import cartItemSlice from './shopping-cart/cart-item-slice';

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = rawUseSelector;