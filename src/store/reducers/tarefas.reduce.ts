import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa.class'
import * as enums from '../../utils/enums/Tarefa.enum'

const tarefasSlice = createSlice({
  name: 'tarefa',
  initialState: [
    new Tarefa(
      1,
      'Estudar JS',
      enums.Priority.IMPORTANTE,
      enums.Status.CONCLUIDA,
      ''
    ),
    new Tarefa(
      2,
      'Estudar VUEJS',
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      'Rever modulo do curso'
    ),
    new Tarefa(
      3,
      'Estudar React',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      'Praticar o useEffect'
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
