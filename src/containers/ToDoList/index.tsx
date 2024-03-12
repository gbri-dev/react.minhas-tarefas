import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Todo from '../../components/Todo'
import { ContainerMain } from './styles'
import * as enums from '../../utils/enums/Tarefa.enum'

const ToDoList = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <ContainerMain>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Todo
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
