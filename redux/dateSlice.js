import { createSlice } from '@reduxjs/toolkit'



export const dateSlice = createSlice({
    name: 'date',
    initialState: {
        ultimoConsumo: null, 
    },
    reducers: {
        actualizar: (state) => {
            state.ultimoConsumo = Date.now();
        }
    }
})

export const {actualizar} = dateSlice.actions
