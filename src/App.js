import React, { useState, useEffect } from 'react'
import Schedule from './components/Schedule'
import ScheduleForm from './components/ScheduleForm'
import schedulesService from './services/schedules-service'
import './App.css'

function App() {
  const [schedules, setSchedules] = useState([])

  useEffect(() => {
    schedulesService
      .getAll()
      .then(initialSchedules => {
        setSchedules(initialSchedules)
      })
  }, [])

  const addSchedule = (scheduleObject) => {
    schedulesService
      .create(scheduleObject)
      .then(returnedSchedule => {
        setSchedules(schedules.concat(returnedSchedule))
      })
  }

  const h1Style = {
    padding: 10,
    margin: 15
  }

  return (
    <div>
      <h1 style={h1Style}>witaj!</h1>
      <ScheduleForm createSchedule={addSchedule} />
      <div>
        {schedules.map(schedule =>
          <Schedule
            schedule={schedule}
            key={schedule.id}
          />
        )}
      </div>
    </div>
  )
}

export default App
