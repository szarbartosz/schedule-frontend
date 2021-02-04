import React, { useState } from 'react'

const LoginForm = ({ register }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistration = async (event) => {
    event.preventDefault()

    register({
      name: name,
      username: username,
      password: password
    })

    setName('')
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <h1>zarejestruj się</h1>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="registername">imię </label>
          <input
            id="registername"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          <label htmlFor="registerusername">login </label>
          <input
            id="registerusername"
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <label htmlFor="registerpassword">hasło </label>
          <input
            id="registerpassword"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">zarejestruj</button>
      </form>
    </div>
  )
}

export default LoginForm