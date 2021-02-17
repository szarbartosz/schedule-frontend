import React from 'react'
import { useDispatch } from 'react-redux'
import { createSchedule } from '../reducers/scheduleReducer'
import { logout } from '../reducers/userReducer'

const ScheduleForm = () => {
  const dispatch = useDispatch()

  const addSchedule = (event) => {
    event.preventDefault()

    const scheduleObject = {
      object: event.target.object.value,
      investor: event.target.investor.value,
      designer: event.target.designer.value,
      applicationDate: event.target.applicationDate.value,
      decisionDate: event.target.decisionDate.value,
      clippingDeadline: event.target.clippingDeadline.value,
      plantingDeadline: event.target.plantingDeadline.value
    }

    event.target.object.value = '',
    event.target.investor.value = '',
    event.target.designer.value = '',
    event.target.applicationDate.value = '',
    event.target.decisionDate.value = '',
    event.target.clippingDeadline.value = '',
    event.target.plantingDeadline.value = ''

    dispatch(createSchedule(scheduleObject))
  }

  const scheduleFormStyle = {
    border: 'solid',
    padding: 10,
    margin: 15
  }

  return (
    <div  style={scheduleFormStyle}>
      <h1>dodaj nowy wpis</h1>
      <form onSubmit={addSchedule}>
        <div>
          <label htmlFor="object">obiekt </label>
          <input
            name="object"
          />
        </div>
        <div>
          <label htmlFor="investor">inwestor </label>
          <input
            name="investor"
          />
        </div>
        <div>
          <label htmlFor="designer">projektant </label>
          <input
            name="designer"
          />
        </div>
        <div>
          <label htmlFor="applicationDate">data złożenia wniosku </label>
          <input
            name="applicationDate"
            type="date"
          />
        </div>
        <div>
          <label htmlFor="decisionDate">data wydania decyzji </label>
          <input
            name="decisionDate"
            type="date"
          />
        </div>
        <div>
          <label htmlFor="clippingDeadline">termin wycinki </label>
          <input
            name="clippingDeadline"
            type="date"
          />
        </div>
        <div>
          <label htmlFor="plantingDeadline">termin nasadzeń </label>
          <input
            name="plantingDeadline"
            type="date"
          />
        </div>
        <div>
          <button type="submit">zapisz </button>
          <button onClick={() => dispatch(logout())}>wyloguj </button>
        </div>
      </form>
      <br></br>
    </div>
  )
}

export default ScheduleForm