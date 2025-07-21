import { configureStore } from '@reduxjs/toolkit'
import furnitureReducer from './slices/fournitures';

export const store = configureStore({
  reducer: {
    furniture: furnitureReducer
  },
})