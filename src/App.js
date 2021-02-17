import React, { useState, useEffect } from 'react'
import ScheduleForm from './components/ScheduleForm'
import Notification from './components/Notification'
import ScheduleList from './components/ScheduleList'
import schedulesService from './services/schedule-service'
import loginService from './services/login-service'
import userService from './services/user-service'
import './App.css'
import LoginPanel from './components/LoginPanel'
import { useDispatch, useSelector } from 'react-redux'
import { initSchedules } from './reducers/scheduleReducer'

function App() {
  const dispatch = useDispatch()

  const [errorMessage, setErrorMessage] = useState(null)
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
    dispatch(initSchedules())
  }, [dispatch])

  const schedules = useSelector(state => state)


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
    <div id="outer-container">
      <Notification message={errorMessage} />
      {
        user === null
          ? <LoginPanel login={login} register={register} />
          : <div>
            <ScheduleForm logout={logout} />
            <div style={h1Style}>
              <button onClick={() => setShowAll(!showAll)}>pokaż {showAll ? 'aktualne' : 'wszystkie' }</button>
            </div>
            <ScheduleList schedules={schedulesToShow} user={user} />
          </div>
      }
    </div>
  )
}

export default App
