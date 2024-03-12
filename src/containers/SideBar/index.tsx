import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filter.reduce'

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
          <FilterCard legend="pendentes" count={4} />
          <FilterCard legend="concluídas" count={5} />
          <FilterCard legend="urgentes" count={2} />
          <FilterCard legend="importantes" count={3} />
          <FilterCard legend="normal" count={1} />
          <FilterCard legend="todas" count={0} ativo />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
