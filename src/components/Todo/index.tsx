import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { ButtonSaved } from '../../styles'

import { remover, editar } from '../../store/reducers/tarefas.reduce'
import TarefaClass from '../../models/Tarefa.class'

type Props = TarefaClass

const Todo = ({
  id,
  title,
  priority,
  status,
  description: descriptionOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOriginal.length > 0) {
      setDescription(descriptionOriginal)
    }
  }, [descriptionOriginal])

  function cancelEdit() {
    setEditando(false)
    setDescription(descriptionOriginal)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag param="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag param="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!editando}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.ActionBar>
        {editando ? (
          <>
            <ButtonSaved
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    title,
                    priority,
                    status,
                    description
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </ButtonSaved>
            <S.ButtonRemoveCancel onClick={cancelEdit}>
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
