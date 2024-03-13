import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filter.reduce'
import * as enums from '../../utils/enums/Tarefa.enum'

const SideBar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.InputSearch
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filters>
          <FilterCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legend="pendentes"
          />
          <FilterCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            legend="concluídas"
          />
          <FilterCard
            valor={enums.Priority.URGENTE}
            criterio="priority"
            legend="urgentes"
          />
          <FilterCard
            valor={enums.Priority.IMPORTANTE}
            criterio="priority"
            legend="importantes"
          />
          <FilterCard
            valor={enums.Priority.NORMAL}
            criterio="priority"
            legend="normal"
          />
          <FilterCard criterio="todas" legend="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
