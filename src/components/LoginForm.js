import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../reducers/userReducer'
import {
  Form,
  Button
} from 'react-bootstrap'

const LoginForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = async (event) => {
    event.preventDefault()

    const user = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    event.target.username.value = ''
    event.target.password.value = ''

    await dispatch(login(user))
    history.push('/schedules')
  }

  return (
    <div>
      <h3>zaloguj się</h3>
      <br></br>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>login</Form.Label>
          <Form.Control
            type="text"
            name="username"
          />
          <br></br>
          <Form.Label>hasło</Form.Label>
          <Form.Control
            type="password"
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="sm">
            zaloguj
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm