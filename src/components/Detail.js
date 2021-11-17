import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'

const Detail = ({ weekData }) => {
  const history = useHistory()
  const { idx } = useParams()
  const { day } = weekData[idx]
  const [circleArr, setCircleArr] = useState([0, 0, 0, 0, 0])

  const handleClickSetCircle = (idx) => {
    const newArr = circleArr.map((_, curr) => {
      return curr <= idx ? 1 : 0
    })

    setCircleArr(newArr)
  }

  const handleKeyUpSetCircle = (e) => {
    if (e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5) {
      const idx = e.key - 1
      handleClickSetCircle(idx)
    }
  }

  useEffect(() => {
    // 마운트 시점
    window.addEventListener('keyup', handleKeyUpSetCircle)
    
    return () => {
      // 언마운트 시점
      window.removeEventListener('keyup', handleKeyUpSetCircle)
    }
  })

  return (
    <DetailArea>
      <h1> { day }요일 평점 남기기</h1>
      <div className="score">
      {
        circleArr.map((num, idx) => {
          return (
            <button 
            key={idx}
            onClick={() => handleClickSetCircle(idx) }
            className={ num ? 'circle on' : 'circle' }>
            </button>
          )
        })
      }
      </div>

      <button className="back-btn" onClick={ () => history.push('/') }>평점 남기기</button>
    </DetailArea>
  )
}

const DetailArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .back-btn {
    margin-top: 20px;
    height: auto;
    font-size: 16px;
    padding: 4px 20px;
    border-radius: 5px;
    border: 2px solid #2f2f2f;
  }
`

export default Detail