import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Todo from '../../components/Todo'
import { ContainerMain } from './styles'
import * as enums from '../../utils/enums/Tarefa.enum'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <ContainerMain>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        {filtraTarefas().map((t) => (
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
