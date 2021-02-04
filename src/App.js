import React, { useState, useEffect } from 'react'
import Schedule from './components/Schedule'
import ScheduleForm from './components/ScheduleForm'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import schedulesService from './services/schedules-service'
import loginService from './services/login-service'
import './App.css'

function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [schedules, setSchedules] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    schedulesService
      .getAll()
      .then(initialSchedules =>
        setSchedules(initialSchedules)
      )
  }, [])

  const addSchedule = (scheduleObject) => {
    schedulesService
      .create(scheduleObject)
      .then(returnedSchedule => {
        setSchedules(schedules.concat(returnedSchedule))
      })
  }

  const deleteSchedule = (scheduleObject) => {
    schedulesService
      .remove(scheduleObject.id)
      .then(() => {
        setSchedules(schedules.filter(s => s.id !== scheduleObject.id))
      })
      .catch(error => {
        console.log(error)
      })
  }

  const toggleVisibilityOf = id => {
    const schedule = schedules.find(s => s.id === id)
    const changedSchedule = { ...schedule, visible: !schedule.visible }

    schedulesService
      .update(id, changedSchedule)
      .then(returnedSchedule => {
        setSchedules(schedules.map(s => s.id !== id ? s : returnedSchedule))
      })
      .catch(() => {
        alert(`wpis o identyfikatorze ${schedule.id} był zapisany jedynie w pamięci cache`)
        setSchedules(schedules.filter(s => s.id !== id))
      })
  }

  const login = async (userObject) => {
    try {
      console.log(userObject)
      const user = await loginService.login(userObject)
      console.log(user)
      setUser(user)
    } catch (exception) {
      setErrorMessage('nieprawidłowy login lub hasło')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const schedulesToShow = showAll
    ? schedules
    : schedules.filter(s => s.visible === true)

  const h1Style = {
    padding: 10,
    margin: 15
  }

  return (
    <div>
      <Notification message={errorMessage} />
      {
        user === null
          ? <LoginForm login={login} />
          : <ScheduleForm createSchedule={addSchedule} />
      }
      <div style={h1Style}>
        <button onClick={() => setShowAll(!showAll)}>
          pokaż {showAll ? 'aktualne' : 'wszystkie' }
        </button>
      </div>
      <div>
        {schedulesToShow.map(schedule =>
          <Schedule
            schedule={schedule}
            toggleVisibility={() => toggleVisibilityOf(schedule.id)}
            removeSchedule={() => deleteSchedule(schedule)}
            key={schedule.id}
          />
        )}
      </div>
    </div>
  )
}

export default App
