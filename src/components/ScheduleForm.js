import React, { useState } from 'react'

const ScheduleForm = ({ createSchedule, logout }) => {
  const [object, setObject] = useState('')
  const [investor, setInvestor] = useState('')
  const [designer, setDesigner] = useState('')
  const [applicationDate, setApplicationDate] = useState('')
  const [decisionDate, setDecisionDate] = useState('')
  const [clippingDeadline, setClippingDeadline] = useState('')
  const [plantingDeadline, setPlantingDeadline] = useState('')

  const handleObjectChange = (event) => {
    setObject(event.target.value)
  }

  const handleInvestorChange = (event) => {
    setInvestor(event.target.value)
  }

  const handleDesignerChange = (event) => {
    setDesigner(event.target.value)
  }

  const handleApplicationDateChange = (event) => {
    setApplicationDate(event.target.value)
  }

  const handleDecisionDateChange = (event) => {
    setDecisionDate(event.target.value)
  }

  const handleClippingDeadlineChange = (event) => {
    setClippingDeadline(event.target.value)
  }

  const handlePlantingDeadlineChange = (event) => {
    setPlantingDeadline(event.target.value)
  }

  const addSchedule = (event) => {
    event.preventDefault()
    createSchedule({
      object: object,
      investor: investor,
      designer: designer,
      applicationDate: applicationDate,
      decisionDate: decisionDate,
      clippingDeadline: clippingDeadline,
      plantingDeadline: plantingDeadline
    })

    setObject('')
    setInvestor('')
    setDesigner('')
    setApplicationDate('')
    setDecisionDate('')
    setClippingDeadline('')
    setPlantingDeadline('')
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
            id="object"
            value={object}
            onChange={handleObjectChange}
          />
        </div>
        <div>
          <label htmlFor="investor">inwestor </label>
          <input
            id="investor"
            value={investor}
            onChange={handleInvestorChange}
          />
        </div>
        <div>
          <label htmlFor="designer">projektant </label>
          <input
            id="designer"
            value={designer}
            onChange={handleDesignerChange}
          />
        </div>
        <div>
          <label htmlFor="applicationDate">data złożenia wniosku </label>
          <input
            id="applicationDate"
            type="date"
            value={applicationDate}
            onChange={handleApplicationDateChange}
          />
        </div>
        <div>
          <label htmlFor="decisionDate">data wydania decyzji </label>
          <input
            id="decisionDate"
            type="date"
            value={decisionDate}
            onChange={handleDecisionDateChange}
          />
        </div>
        <div>
          <label htmlFor="clippingDeadline">termin wycinki </label>
          <input
            id="clippingDeadline"
            type="date"
            value={clippingDeadline}
            onChange={handleClippingDeadlineChange}
          />
        </div>
        <div>
          <label htmlFor="plantingDeadline">termin nasadzeń </label>
          <input
            id="plantingDeadline"
            type="date"
            value={plantingDeadline}
            onChange={handlePlantingDeadlineChange}
          />
        </div>
        <div>
          <button type="submit">zapisz </button>
          <button onClick={logout}>wyloguj </button>
        </div>
      </form>
    </div>
  )
}

export default ScheduleForm