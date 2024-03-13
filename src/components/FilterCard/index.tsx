import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filter.reduce'
import * as enums from '../../utils/enums/Tarefa.enum'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  criterio: 'priority' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const FilterCard = ({ legend, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const isActive = () => {
    const isCriterio = filtro.criterio === criterio
    const isValue = filtro.valor === valor

    return isCriterio && isValue
  }

  const countTasks = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'priority') {
      return tarefas.itens.filter((item) => item.priority === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const thisActive = isActive()
  const count = countTasks()
  return (
    <S.Card ativo={thisActive} onClick={filtrar}>
      <S.Count>{count}</S.Count>
      <S.Label>{legend}</S.Label>
    </S.Card>
  )
}

export default FilterCard
