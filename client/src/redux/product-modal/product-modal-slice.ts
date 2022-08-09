import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProductModalState {
  value: string | null;
}

const initialState: IProductModalState = {
  value: null,
}

export const productModalSlice = createSlice({
  name: 'productModal',
  initialState,
  reducers: {
    set: (state: IProductModalState, action: PayloadAction<string | null>) => {
      state.value = action.payload
    },
    remove: (state:IProductModalState) => {
      state.value = null;
    }
  }
})
export const { set, remove } = productModalSlice.actions;

export default productModalSlice.reducer;