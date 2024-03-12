import { configureStore } from '@reduxjs/toolkit'
import tarefasReduce from './reducers/tarefas.reduce'
import filterReduce from './reducers/filter.reduce'

const store = configureStore({
  reducer: {
    tarefas: tarefasReduce,
    filtro: filterReduce
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
