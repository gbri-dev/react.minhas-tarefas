import ButtonAdd from '../../components/ButtonAdd'
import SideBar from '../../containers/SideBar'
import ToDoList from '../../containers/ToDoList'

const Home = () => (
  <>
    <SideBar mostrarFiltros />
    <ToDoList />
    <ButtonAdd />
  </>
)

export default Home
