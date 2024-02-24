import { configureStore } from "@reduxjs/toolkit";
import { actualizarUltimoConsumoDesdeBD, cargarUltimoConsumo, dateSlice } from "./dateSlice";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({
  reducer: {
    date: dateSlice.reducer,
  }
});

store.dispatch(cargarUltimoConsumo());