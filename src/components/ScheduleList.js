import React from 'react'
import Schedule from './Schedule'

const ScheduleList = ({ schedules, toggleVisibilityOf, user }) => {
  return (
    <div>
      {schedules.filter(s => s.user.username === user.username).map(schedule =>
        <Schedule
          schedule={schedule}
          toggleVisibility={() => toggleVisibilityOf(schedule.id)}
          key={schedule.id}
        />
      )}
    </div>
  )
}

export default ScheduleList