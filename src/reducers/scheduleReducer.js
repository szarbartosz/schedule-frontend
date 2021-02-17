import scheduleService from '../services/schedule-service'

const scheduleReducer = (state = [], action) => {
  switch (action.type) {
  case '/schedules/init':
    return action.data
  case '/schedules/create':
    return [...state, action.data]
  case '/schedules/remove':
    return state.filter(schedule => schedule.id !== action.data.id)
  case '/schedules/toggle':
    console.log(action.data)
    return state.map(schedule => schedule.id !== action.data.id ? schedule : action.data)
  default:
    return state
  }
}

export const initSchedules = () => {
  return async dispatch => {
    const schedules = await scheduleService.getAll()
    dispatch({
      type: '/schedules/init',
      data: schedules
    })
  }
}

export const createSchedule = (scheduleObject) => {
  return async dispatch => {
    const newSchedule = await scheduleService.create(scheduleObject)
    console.log(newSchedule)
    dispatch({
      type: '/schedules/create',
      data: newSchedule
    })
  }
}

export const removeSchedule = (id) => {
  return async dispatch => {
    await scheduleService.remove(id)
    dispatch({
      type: '/schedules/remove',
      data: { id }
    })
  }
}

export const toggleVisibility = (scheduleObject) => {
  return async dispatch => {
    const changedSchedule = {
      ...scheduleObject,
      visible: !scheduleObject.visible
    }
    const updatedSchedule = await scheduleService.update(changedSchedule.id, changedSchedule)
    dispatch({
      type: '/schedules/toggle',
      data: updatedSchedule
    })
  }
}

export default scheduleReducer