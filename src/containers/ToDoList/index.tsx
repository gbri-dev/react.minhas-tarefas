import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Todo from '../../components/Todo'
import { ContainerMain } from './styles'
import * as enums from '../../utils/enums/Tarefa.enum'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <ContainerMain>
      <ul>
        {itens.map((t) => (
          <li key={t.id}>
            <Todo
              id={t.id}
              description={t.description}
              title={t.title}
              priority={t.priority}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </ContainerMain>
  )
}
export default ToDoList
