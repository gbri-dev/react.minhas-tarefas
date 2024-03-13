import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { Form, Options, Option } from './styles'

import {
  ContainerMain,
  TitleResult,
  InputSearch,
  ButtonSaved
} from '../../styles'
import * as enums from '../../utils/enums/Tarefa.enum'
import Tarefa from '../../models/Tarefa.class'
import { cadastrar } from '../../store/reducers/tarefas.reduce'

const FormCad = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Priority.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    const taskToAdd = new Tarefa(
      9,
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao
    )

    dispatch(cadastrar(taskToAdd))
    navigate('/')
  }

  return (
    <ContainerMain>
      <TitleResult>Nova Tarefa</TitleResult>
      <Form onSubmit={cadastrarTarefa}>
        <InputSearch
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <InputSearch
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Priority)
                }
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <ButtonSaved type="submit">Cadastrar</ButtonSaved>
      </Form>
    </ContainerMain>
  )
}

export default FormCad
