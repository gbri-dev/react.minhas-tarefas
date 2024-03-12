import * as S from './styles'

export type Props = {
  ativo?: boolean
  count: number
  legend: string
}

const FilterCard = ({ ativo, count, legend }: Props) => (
  <S.Card ativo={ativo}>
    <S.Count>{count}</S.Count>
    <S.Label>{legend}</S.Label>
  </S.Card>
)

export default FilterCard
