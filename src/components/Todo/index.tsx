import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa.enum'

import { remover } from '../../store/reducers/tarefas.reduce'
import TarefaClass from '../../models/Tarefa.class'

type Props = TarefaClass

const Todo = ({ id, title, priority, status, description }: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag param="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag param="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {editando ? (
          <>
            <S.ButtonSaved>Salvar</S.ButtonSaved>
            <S.ButtonRemoveCancel onClick={() => setEditando(false)}>
              Cancelar
            </S.ButtonRemoveCancel>
          </>
        ) : (
          <>
            <S.Buttons onClick={() => setEditando(true)}>Editar</S.Buttons>
            <S.ButtonRemoveCancel onClick={() => dispatch(remover(id))}>
              Remover
            </S.ButtonRemoveCancel>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Todo
