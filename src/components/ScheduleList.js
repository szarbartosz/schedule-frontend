import React from 'react'
import Schedule from './Schedule'

const ScheduleList = ({ schedules, toggleVisibilityOf, deleteSchedule, user }) => {
  return (
    <div>
      {schedules.filter(s => s.user.username === user.username).map(schedule =>
        <Schedule
          schedule={schedule}
          toggleVisibility={() => toggleVisibilityOf(schedule.id)}
          removeSchedule={() => deleteSchedule(schedule)}
          key={schedule.id}
        />
      )}
    </div>
  )
}

export default ScheduleList