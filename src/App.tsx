import SideBar from './containers/SideBar'
import ToDoList from './containers/ToDoList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <ToDoList />
      </Container>
    </>
  )
}

export default App
