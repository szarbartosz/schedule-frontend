import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const LoginPanel = () => {
  const [registered, setRegistered] = useState(true)

  const showWhenRegistered = { display: registered ? '' : 'none' }
  const showWhenUnregistered = { display: registered ? 'none' : '' }

  const toggleRegistered = () => {
    setRegistered(!registered)
  }

  return (
    <div>
      <h1>witaj!</h1>
      <div style={showWhenRegistered}>
        <LoginForm />
        nie masz konta? <button onClick={toggleRegistered}>zarejestruj się</button>
      </div>
      <div style={showWhenUnregistered}>
        <RegistrationForm />
        masz już konto? <button onClick={toggleRegistered}>zaloguj się</button>
      </div>
    </div>
  )
}

export default LoginPanel