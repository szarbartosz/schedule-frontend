import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../reducers/userReducer'

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
      <h1>zaloguj się</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">login </label>
          <input
            name="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">hasło </label>
          <input
            name="password"
            type="password"
          />
        </div>
        <button type="submit">zaloguj</button>
      </form>
    </div>
  )
}

export default LoginForm