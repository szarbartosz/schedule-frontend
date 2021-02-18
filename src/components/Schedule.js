import React from 'react'
import { useDispatch } from 'react-redux'
import { removeSchedule, toggleVisibility } from '../reducers/scheduleReducer'
import Countdown from './Countdown'
import {
  Table,
  Button
} from 'react-bootstrap'

const Schedule = ({ schedule }) => {
  const dispatch = useDispatch()

  const label = schedule.visible
    ? 'oznacz jako nieaktualne'
    : 'oznacz jako aktualne'

  const showWhenClipping = { display: schedule.clipping ? '' : 'none' }
  const showWhenPlanting = { display: schedule.clipping ? 'none' : '' }

  return (
    <div>
      <Countdown schedule={Schedule} />
      <Table>
        <tbody>
          <tr>
            <th>obiekt</th>
            <td>{schedule.object}</td>
          </tr>
          <tr style={showWhenClipping}>
            <th>termin wycinki</th>
            <td>{ schedule.deadline.split('T')[0] }</td>
          </tr>
          <tr style={showWhenPlanting}>
            <th>termin nasadzeń</th>
            <td>{ schedule.deadline.split('T')[0] }</td>
          </tr>
          <tr>
            <th>inwestor</th>
            <td>{schedule.investor}</td>
          </tr>
          <tr>
            <th>projektant</th>
            <td>{schedule.designer}</td>
          </tr>
          <tr>
            <th>data złożenia wniosku</th>
            <td>{ schedule.applicationDate.split('T')[0] }</td>
          </tr>
          <tr>
            <th>data wydania decyzji</th>
            <td>{ schedule.decisionDate.split('T')[0] }</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="danger" size="sm" onClick={() => dispatch(removeSchedule(schedule.id))}>usuń wpis</Button>{' '}
      <Button variant="secondary" size="sm" onClick={() => dispatch(toggleVisibility(schedule))}>{label}</Button>
    </div>
  )
}

export default Schedule