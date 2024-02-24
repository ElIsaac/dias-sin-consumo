// dateSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { calendarEvent } from "../utils/calendarEvent";
import { agregarFechaConsumo, ultimoConsumo } from "../db";

const initialState = {
  ultimoConsumo: null,
  consumoHistorico: [],
  consumosHoy: []
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    actualizar: (state) => {
      const now = Date.now();
      const fechaActual = calendarEvent(now, true);
      state.ultimoConsumo = now;
      console.log("now")
      console.log(now)
      // Verificar si la fecha ya existe en consumoHistorico
      agregarFechaConsumo(now.toString());
      console.log(state.consumoHistorico);
    },
    actualizarUltimoConsumoDesdeBD: (state, action) => {
      state.ultimoConsumo = action.payload || null;
    },
  },
});

// Thunk para cargar el último consumo desde la base de datos
export const cargarUltimoConsumo = () => async (dispatch) => {
  try {
    const ultimoConsumoResult = await ultimoConsumo();
    res=ultimoConsumoResult.fecha
    dispatch(dateSlice.actions.actualizarUltimoConsumoDesdeBD(res));
  } catch (error) {
    console.error("Error al cargar el último consumo", error);
  }
};

export const { actualizar, actualizarUltimoConsumoDesdeBD } = dateSlice.actions;
export default dateSlice.reducer;
