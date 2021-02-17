import React from 'react'
import Schedule from './Schedule'

const ScheduleList = ({ schedules, toggleVisibilityOf }) => {
  return (
    <div>
      {schedules.map(schedule =>
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