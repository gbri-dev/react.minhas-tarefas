import { Form, Options } from './styles'
import {
  ContainerMain,
  TitleResult,
  InputSearch,
  ButtonSaved
} from '../../styles'

const FormCad = () => (
  <ContainerMain>
    <TitleResult>Nova Tarefa</TitleResult>
    <Form>
      <InputSearch type="text" placeholder="Título" />
      <InputSearch as="textarea" placeholder="Descrição da tarefa" />
      <Options>
        <p>Prioridade</p>
        <input name="priority" type="radio" id="urgente" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <input name="priority" type="radio" id="urgente" />{' '}
        <label htmlFor="importante">Importante</label>
        <input name="priority" type="radio" id="urgente" />{' '}
        <label htmlFor="normal">Normal</label>
      </Options>
      <ButtonSaved type="submit">Cadastrar</ButtonSaved>
    </Form>
  </ContainerMain>
)

export default FormCad
