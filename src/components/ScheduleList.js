import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Countdown from './Countdown'
// import Schedule from './Schedule'

const ScheduleList = ({ schedules }) => {
  const [showUpToDate, setShowUpToDate] = useState(true)
  const user = useSelector(state => state.user)

  const schedulesToShow = showUpToDate
    ? schedules.filter(s => s.visible)
    : schedules.filter(s => !s.visible)

  return (
    <div>
      <button onClick={() => setShowUpToDate(!showUpToDate)}>
          pokaż {showUpToDate ? 'nieaktualne' : 'aktualne' }
      </button>
      <table>
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
      </table>
    </div>

  // <div>
  //   {schedules.map(schedule =>
  //     <Schedule
  //       schedule={schedule}
  //       toggleVisibility={() => toggleVisibilityOf(schedule.id)}
  //       key={schedule.id}
  //     />
  //   )}
  // </div>
  )
}

export default ScheduleList