import React from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../reducers/userReducer'
import {
  Form,
  Button
} from 'react-bootstrap'

const LoginForm = () => {
  const dispatch = useDispatch()

  const handleRegistration = async (event) => {
    event.preventDefault()

    const newUser = {
      name: event.target.registername.value,
      username: event.target.registerusername.value,
      password: event.target.registerpassword.value
    }

    event.target.registername.value = ''
    event.target.registerusername.value = ''
    event.target.registerpassword.value = ''

    dispatch(register(newUser))
  }

  return (
    <div>
      <h3>zarejestruj się</h3>
      <br></br>
      <Form onSubmit={handleRegistration}>
        <Form.Group>
          <Form.Label>imię</Form.Label>
          <Form.Control
            type="text"
            name="registername"
          />
          <br></br>
          <Form.Label>login</Form.Label>
          <Form.Control
            type="text"
            name="registerusername"
          />
          <br></br>
          <Form.Label>hasło</Form.Label>
          <Form.Control
            type="password"
            name="registerpassword"
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="sm">
          zarejestruj
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm