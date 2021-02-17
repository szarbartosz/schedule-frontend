import React, { useEffect } from 'react'
import Schedule from './components/Schedule'
import ScheduleForm from './components/ScheduleForm'
import ScheduleList from './components/ScheduleList'
import './App.css'
import LoginPanel from './components/LoginPanel'
import { useDispatch, useSelector } from 'react-redux'
import { initUser, logout } from './reducers/userReducer'
import {
  Link,
  Redirect,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom'
import { initSchedules } from './reducers/scheduleReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(initSchedules())
  }, [dispatch])

  const user = useSelector(state => state.user)
  const schedules = useSelector(state => state.schedules)

  const scheduleMatch = useRouteMatch('/schedules/:id')
  const matchingSchedule = scheduleMatch
    ? schedules.find(s => s.id === scheduleMatch.params.id)
    : null

  return (
    <div id="outer-container">
      {/* <Notification message={errorMessage} /> */}
      <div>
        {user !== null
          ? <div>
            <Link to="/schedules">nadchodzące terminy</Link>
            <Link to="/schedules/add">dodaj nowy</Link>
            <button onClick={() => dispatch(logout())}>wyloguj</button>
          </div>
          : null}
      </div>
      <Switch>
        <Route path="/schedules/add">
          {window.localStorage.getItem('loggedScheduleAppUser') ? <ScheduleForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/schedules/:id">
          {window.localStorage.getItem('loggedScheduleAppUser') ? <Schedule schedule={matchingSchedule} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/schedules">
          {window.localStorage.getItem('loggedScheduleAppUser') ? <ScheduleList schedules={schedules} user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <LoginPanel />
        </Route>
      </Switch>
    </div>
  )
}

export default App
