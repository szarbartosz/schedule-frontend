import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Countdown from './Countdown'
import {
  Button,
  Table
} from 'react-bootstrap'

const ScheduleList = ({ schedules }) => {
  const [showUpToDate, setShowUpToDate] = useState(true)
  const user = useSelector(state => state.user)

  const schedulesToShow = showUpToDate
    ? schedules.filter(s => s.visible)
    : schedules.filter(s => !s.visible)

  return (
    <div>
      <Button className="my-2" variant="primary" size="sm" block onClick={() => setShowUpToDate(!showUpToDate)}>
        pokaż {showUpToDate ? 'nieaktualne' : 'aktualne' }
      </Button>
      <Table striped>
        <tbody>
          {schedulesToShow.filter(s => s.user.username === user.username).map(schedule =>
            <tr key={schedule.id}>
              <td>
                <Link to={`/schedules/${schedule.id}`}>{schedule.object}</Link>
              </td>
              <td>
                {schedule.clipping ? <p>wycinka</p> : <p>nasadzenia</p>}
              </td>
              <td>
                <Countdown schedule={schedule} />
              </td>
            </tr>)}
        </tbody>
      </Table>
      {/* <table>
        <tbody>
          {schedulesToShow.filter(s => s.user.username === user.username).map(schedule =>
            <tr key={schedule.id}>
              <td>
                {schedule.clipping ? <p>wycinka</p> : <p>nasadzenia</p>}
                <Link to={`/schedules/${schedule.id}`}>{schedule.object}</Link>
                <Countdown schedule={schedule} />
              </td>
            </tr>)}
        </tbody>
      </table> */}
    </div>
  )
}

export default ScheduleList