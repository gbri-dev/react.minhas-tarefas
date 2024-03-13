import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa.enum'

type FilterState = {
  termo?: string
  criterio: 'priority' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FilterState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
