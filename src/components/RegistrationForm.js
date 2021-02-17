import React from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../reducers/userReducer'

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
      <h1>zarejestruj się</h1>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="registername">imię </label>
          <input
            name="registername"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="registerusername">login </label>
          <input
            name="registerusername"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">hasło </label>
          <input
            name="registerpassword"
            type="password"
          />
        </div>
        <button type="submit">zarejestruj</button>
      </form>
    </div>
  )
}

export default LoginForm