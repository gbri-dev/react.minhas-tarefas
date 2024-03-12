import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa.class'
import * as enums from '../../utils/enums/Tarefa.enum'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      title: 'Estudar JavaScript',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      description: 'estudando fundamentos'
    },
    {
      id: 2,
      title: 'Estudar TypeScript',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      description: 'estudando fundamentos'
    },
    {
      id: 3,
      title: 'Estudar React',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      description: 'estudando fundamentos'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
