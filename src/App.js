import styled from 'styled-components'
import GlobalStyles from './Global'
import { Route } from 'react-router-dom'

import Main from './components/Main'
import Detail from './components/Detail'

function App() {

  const createRanNum = () => {
    return Math.floor(Math.random() * 5) + 1
  }

  const createWeekData = () => {
    const krDay = ['일', '월', '화', '수', '목', '금', '토']
    const today = new Date()
    const day = today.getDay()
    const todayKr = krDay[day]
    const splitDays = krDay.join('').split(todayKr)
    let sortDayArr = [
      todayKr,
      ...splitDays[1],
      ...splitDays[0]
    ] 

    sortDayArr = sortDayArr.map(day => {
      return {
        day,
        score: createRanNum()
      }
    })
    
    return sortDayArr
  }

  const weekData = createWeekData()

  return (
    <Wrap>
      <GlobalStyles/>

      <Route path="/" exact>
        <Main weekData={ weekData }/>
      </Route>

      <Route path="/detail/:idx" exact>
        <Detail weekData={ weekData } />
      </Route>
      
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 40px 16px;
  margin: 0 auto;
  max-width: 420px;
  border-radius: 5px;
  border: 1px solid #2f2f2f;
  background-color: #fff;

  h1 {
    font-size: 26px;
    text-align: center;
    margin-bottom: 20px;
  }

  .score {
    display: flex;

    .circle {
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 4px;
      background-color: #eaeaea;

      &.on {
        background-color: #e91e63;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`

export default App;
