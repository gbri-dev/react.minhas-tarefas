import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa.enum'

type FilterState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
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
    }
  }
})

export const { alterarTermo } = filtroSlice.actions

export default filtroSlice.reducer
