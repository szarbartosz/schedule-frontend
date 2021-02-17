import React, { useState, useEffect } from 'react'
import ScheduleForm from './components/ScheduleForm'
// import Notification from './components/Notification'
import ScheduleList from './components/ScheduleList'
import './App.css'
import LoginPanel from './components/LoginPanel'
import { useDispatch, useSelector } from 'react-redux'
import { initSchedules } from './reducers/scheduleReducer'
import { initUser } from './reducers/userReducer'

function App() {
  const dispatch = useDispatch()

  // const [errorMessage, setErrorMessage] = useState(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    dispatch(initSchedules())
  }, [dispatch])

  useEffect(() => {
    dispatch(initUser())
  }, [dispatch])

  const schedules = useSelector(state => state.schedules)
  const user = useSelector(state => state.user)

  const schedulesToShow = showAll
    ? schedules
    : schedules.filter(s => s.visible === true)

  const h1Style = {
    padding: 10,
    margin: 15
  }

  return (
    <div id="outer-container">
      {/* <Notification message={errorMessage} /> */}
      {
        user === null
          ? <LoginPanel />
          : <div>
            <ScheduleForm />
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
