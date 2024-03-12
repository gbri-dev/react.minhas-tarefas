import Todo from '../../components/Todo'
import { ContainerMain } from './styles'

const ToDoList = () => (
  <ContainerMain>
    <ul>
      <li>
        <Todo />
      </li>
      <li>
        <Todo />
      </li>
      <li>
        <Todo />
      </li>
      <li>
        <Todo />
      </li>
    </ul>
  </ContainerMain>
)
export default ToDoList
