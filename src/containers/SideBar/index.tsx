import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.InputSearch type="text" placeholder="Buscar" />
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

export default SideBar
