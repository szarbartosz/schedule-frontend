import React from 'react'
import { useDispatch } from 'react-redux'
import { removeSchedule, toggleVisibility } from '../reducers/scheduleReducer'
import Countdown from './Countdown'

const Schedule = ({ schedule }) => {
  const dispatch = useDispatch()

  const label = schedule.visible
    ? 'oznacz jako nieaktualne'
    : 'oznacz jako aktualne'

  const showWhenClipping = { display: schedule.clipping ? '' : 'none' }
  const showWhenPlanting = { display: schedule.clipping ? 'none' : '' }

  const scheduleStyle = {
    border: 'solid',
    padding: 10,
    margin: 15
  }

  return (
    <div style={scheduleStyle}>
      <Countdown schedule={schedule} />
      <p><b>obiekt: </b>{ schedule.object }</p>
      <p style={showWhenClipping}><b>termin wycinki: </b>{ schedule.deadline.split('T')[0] }</p>
      <p style={showWhenPlanting}><b>termin nasadzeń: </b>{ schedule.deadline.split('T')[0] }</p>
      <p><b>inwestor: </b>{ schedule.investor }</p>
      <p><b>projektant: </b>{ schedule.designer }</p>
      <p><b>data złożenia wniosku: </b>{ schedule.applicationDate.split('T')[0] }</p>
      <p><b>data wydania decyzji: </b>{ schedule.decisionDate.split('T')[0] }</p>
      <button type="submit" onClick={() => dispatch(removeSchedule(schedule.id))}>usuń wpis</button>
      <button type="submit" onClick={() => dispatch(toggleVisibility(schedule))}>{label}</button>
    </div>
  )
}

export default Schedule