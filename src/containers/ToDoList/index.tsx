import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Todo from '../../components/Todo'
import { ContainerMain, Resultado } from './styles'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.title.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'priority') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.priority === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()

  const detalhesFiltro = (quantidade: number) => {
    let message = ''
    const complement =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      message = `${quantidade} tarefa(s) encontrada(s) como: todas ${complement}`
    } else {
      message = `${quantidade} tarefa(s) encontrada(s) como: "${criterio} = ${valor}" ${complement}`
    }

    return message
  }

  const detalhes = detalhesFiltro(tarefas.length)
  return (
    <ContainerMain>
      <Resultado>{detalhes}</Resultado>
      <ul>
        {tarefas.map((t) => (
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
