import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const register = async userObject => {
  const response = await axios.post(baseUrl, userObject)
  return response.data
}

export default { register }