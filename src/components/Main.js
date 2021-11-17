import styled from 'styled-components'
import { useHistory } from 'react-router'

import Score from './Score'

const Main = ({ weekData }) => {
  const history = useHistory()

  const handleClickDetail = (idx) => {
    history.push(`/detail/${idx}`)
  }

  return (
    <DetailArea>
      <h1>내 일주일은?</h1>
      {
        weekData.map((data, idx) => {
          return (
            <li key={idx}>
              <div className="day">{ data.day }</div>
              <Score score={data.score} />
              <button onClick={ () => handleClickDetail(idx) } className="detail-btn">점수</button>
            </li>
          )
        })
      }
    </DetailArea>
  )
}

const DetailArea = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .day {
    width: 20px;
    margin-right: 10px;
  }

  .detail-btn {
    margin-left: 10px;
    padding: 4px;
    height: auto;
    border-radius: 6px;
    border: 3px solid #2f2f2f;
  }
`

export default Main