import React, { useEffect } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Schedule from './components/Schedule'
import ScheduleForm from './components/ScheduleForm'
import ScheduleList from './components/ScheduleList'
import { useDispatch, useSelector } from 'react-redux'
import { initSchedules } from './reducers/scheduleReducer'
import { initUser, logout } from './reducers/userReducer'
import {
  // Link,
  Redirect,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom'
import {
  Nav,
  Navbar,
  Button
} from 'react-bootstrap'


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
    <div className="container">
      {/* <Notification message={errorMessage} /> */}
      <div>
        {user !== null
          ?
          <Navbar bg="light">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/schedules">
                  nadchodzące terminy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/schedules/add">
                  dodaj nowy
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <span className="mx-2">zalogowano jako: <a>{user.name}</a></span>
              </Navbar.Text>
              <Navbar.Text>
                <Button variant="danger" size="sm" onClick={() => dispatch(logout())}>wyloguj</Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
          :

          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="/login">
                <Button variant="outline-secondary" size="sm">logowanie</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/register">
                <Button variant="outline-secondary" size="sm">rejestracja</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        }
      </div>
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
        <Route path="/schedules/add">
          {window.localStorage.getItem('loggedScheduleAppUser') ? <ScheduleForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/schedules/:id">
          {window.localStorage.getItem('loggedScheduleAppUser') ? <Schedule schedule={matchingSchedule} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/schedules">
          {window.localStorage.getItem('loggedScheduleAppUser') ? <ScheduleList schedules={schedules} user={user} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  )
}

export default App
