import { FiArrowDownLeft, FiArrowLeft } from 'react-icons/fi'
import * as S from './styles'

export function CardChart () {
  const amountBars = Array.from(Array(12).keys())
  return (
    <S.Container>
        <div>
            <FiArrowDownLeft />
          <strong>Stats</strong>
          <FiArrowLeft />
        </div>
        <S.Chart>
        {amountBars.map((item) => (
          <div>
            <span></span>
          </div>
        ))}
    </S.Chart>
    </S.Container>
  )
}