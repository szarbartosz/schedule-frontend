import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/schedules'

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const remove = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export default { getAll, create, remove }