import React from 'react'
import { useDispatch } from 'react-redux'
import { createSchedule } from '../reducers/scheduleReducer'
import {
  Form,
  Button
} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const ScheduleForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const addSchedule = async (event) => {
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

    await dispatch(createSchedule(scheduleObject))
    history.push('/schedules')
  }

  return (
    <div>
      <br></br>
      <h2>dodaj nowy wpis</h2>
      <br></br>
      <Form onSubmit={addSchedule}>
        <Form.Group>
          <Form.Label>obiekt</Form.Label>
          <Form.Control
            type="text"
            name="object"
          />
          <br></br>
          <Form.Label>inwestor</Form.Label>
          <Form.Control
            type="text"
            name="investor"
          />
          <br></br>
          <Form.Label>projektant</Form.Label>
          <Form.Control
            type="text"
            name="designer"
          />
          <br></br>
          <Form.Label>data złożenia wniosku</Form.Label>
          <Form.Control
            type="date"
            name="applicationDate"
          />
          <br></br>
          <Form.Label>data wydania decyzji</Form.Label>
          <Form.Control
            type="date"
            name="decisionDate"
          />
          <br></br>
          <Form.Label>termin wycinki</Form.Label>
          <Form.Control
            type="date"
            name="clippingDeadline"
          />
          <br></br>
          <Form.Label>termin nasadzeń</Form.Label>
          <Form.Control
            type="date"
            name="plantingDeadline"
          />
          <br></br>
        </Form.Group>
        <Button variant="primary" type="submit" size="sm" block>
          zapisz
        </Button>
      </Form>
    </div>
    // <div  style={scheduleFormStyle}>
    //   <h1>dodaj nowy wpis</h1>
    //   <form onSubmit={addSchedule}>
    //     <div>
    //       <label htmlFor="object">obiekt </label>
    //       <input
    //         name="object"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="investor">inwestor </label>
    //       <input
    //         name="investor"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="designer">projektant </label>
    //       <input
    //         name="designer"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="applicationDate">data złożenia wniosku </label>
    //       <input
    //         name="applicationDate"
    //         type="date"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="decisionDate">data wydania decyzji </label>
    //       <input
    //         name="decisionDate"
    //         type="date"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="clippingDeadline">termin wycinki </label>
    //       <input
    //         name="clippingDeadline"
    //         type="date"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="plantingDeadline">termin nasadzeń </label>
    //       <input
    //         name="plantingDeadline"
    //         type="date"
    //       />
    //     </div>
    //     <div>
    //       <button type="submit">zapisz </button>
    //       <button onClick={() => dispatch(logout())}>wyloguj </button>
    //     </div>
    //   </form>
    //   <br></br>
    // </div>
  )
}

export default ScheduleForm