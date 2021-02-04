import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const LoginPanel = ({ login, register }) => {
  const [registered, setRegistered] = useState(true)

  const showWhenRegistered = { display: registered ? '' : 'none' }
  const showWhenUnregistered = { display: registered ? 'none' : '' }

  const toggleRegistered = () => {
    setRegistered(!registered)
  }

  const loginPanelStyle = {
    border: 'solid',
    padding: 10,
    margin: 15
  }

  return (
    <div style={loginPanelStyle}>
      <div style={showWhenRegistered}>
        <LoginForm login={login} />
        nie masz konta? <button onClick={toggleRegistered}>zarejestruj się</button>
      </div>
      <div style={showWhenUnregistered}>
        <RegistrationForm register={register} />
        masz już konto? <button onClick={toggleRegistered}>zaloguj się</button>
      </div>
    </div>
  )
}

export default LoginPanel