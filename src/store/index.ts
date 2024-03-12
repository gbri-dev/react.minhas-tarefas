import { configureStore } from '@reduxjs/toolkit'
import tarefasReduce from './reducers/tarefas.reduce'

const store = configureStore({
  reducer: {
    tarefas: tarefasReduce
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
