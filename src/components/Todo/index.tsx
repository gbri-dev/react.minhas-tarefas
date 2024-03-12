import * as S from './styles'

const Todo = () => (
  <S.Card>
    <S.Title>Nome da tarefa</S.Title>
    <S.Tag>importante</S.Tag>
    <S.Tag>pendente</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Buttons>Editar</S.Buttons>
      <S.Buttons>Remover</S.Buttons>
    </S.ActionBar>
  </S.Card>
)

export default Todo
