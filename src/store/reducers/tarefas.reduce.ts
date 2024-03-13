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
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse título.')
      } else {
        state.itens.push(action.payload)
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alterarStatus } =
  tarefasSlice.actions

export default tarefasSlice.reducer
