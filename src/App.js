import React, { useState, useEffect } from 'react'
import ScheduleForm from './components/ScheduleForm'
import Notification from './components/Notification'
import ScheduleList from './components/ScheduleList'
import schedulesService from './services/schedules-service'
import loginService from './services/login-service'
import userService from './services/user-service'
import './App.css'
import LoginPanel from './components/LoginPanel'

function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [schedules, setSchedules] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedScheduleAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      schedulesService.setToken(user.token)
    }
  }, [])

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
    window.location.reload()
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

  const register = async (userObject) => {
    try {
      const user = await userService.register(userObject)
      console.log(user)
    } catch (exception) {
      setErrorMessage('coś poszło nie tak :(')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const login = async (userObject) => {
    try {
      const user = await loginService.login(userObject)

      window.localStorage.setItem(
        'loggedScheduleAppUser', JSON.stringify(user)
      )
      schedulesService.setToken(user.token)
      setUser(user)
    } catch (exception) {
      setErrorMessage('nieprawidłowy login lub hasło')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const logout = () => {
    window.localStorage.removeItem('loggedScheduleAppUser')
    window.location.reload()
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
          ? <LoginPanel login={login} register={register} />
          : <div>
            <ScheduleForm createSchedule={addSchedule} logout={logout} />
            <div style={h1Style}>
              <button onClick={() => setShowAll(!showAll)}>pokaż {showAll ? 'aktualne' : 'wszystkie' }</button>
            </div>
            <ScheduleList schedules={schedulesToShow} toggleVisibilityOf={toggleVisibilityOf} deleteSchedule={deleteSchedule} user={user} />
          </div>
      }
    </div>
  )
}

export default App
