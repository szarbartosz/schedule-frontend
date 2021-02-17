import loginService from '../services/login-service'
import userService from '../services/user-service'
import scheduleService from '../services/schedule-service'

const userReducer = (state = null, action) => {
  switch (action.type) {
  case '/users/init':
    return action.data
  case '/users/register':
    return state
  case '/users/login':
    return action.data
  case '/users/logout':
    return action.data
  default:
    return state
  }
}

export const initUser = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedScheduleAppUser')
  let user = null
  if (loggedUserJSON) {
    user = JSON.parse(loggedUserJSON)
    scheduleService.setToken(user.token)
  }
  return {
    type: '/users/init',
    data: user
  }
}

export const register = (userObject) => {
  return async dispatch => {
    const user = await userService.register(userObject)
    dispatch({
      type: '/users/register',
      data: user
    })
  }
}

export const login = (userObject) => {
  return async dispatch => {
    const user = await loginService.login(userObject)
    window.localStorage.setItem(
      'loggedScheduleAppUser', JSON.stringify(user)
    )
    scheduleService.setToken(user.token)
    dispatch({
      type: '/users/login',
      data: user
    })
  }
}

export const logout = () => {
  window.localStorage.removeItem('loggedScheduleAppUser')
  return {
    type: '/users/logout',
    data: null
  }
}

export default userReducer