import React from 'react'

const Schedule = ({ schedule, removeSchedule, toggleVisibility }) => {
  const label = schedule.visible
    ? 'oznacz jako nieaktualne'
    : 'oznacz jako aktualne'

  const mainDate = schedule.plantingDeadline === null
    ? schedule.clippingDeadline.split('T')[0]
    : schedule.plantingDeadline.split('T')[0]

  const clipping = schedule.clippingDeadline !== null

  const showWhenClipping = { display: clipping ? '' : 'none' }
  const showWhenPlanting = { display: clipping ? 'none' : '' }

  const scheduleStyle = {
    border: 'solid',
    padding: 10,
    margin: 15
  }

  return (
    <div style={scheduleStyle}>
      <p><b>obiekt: </b>{ schedule.object }</p>
      <p><b>inwestor: </b>{ schedule.investor }</p>
      <p><b>projektant: </b>{ schedule.designer }</p>
      <p><b>data złożenia wniosku: </b>{ schedule.applicationDate.split('T')[0] }</p>
      <p><b>data wydania decyzji: </b>{ schedule.decisionDate.split('T')[0] }</p>
      <p style={showWhenClipping}><b>termin wycinki: </b>{ mainDate }</p>
      <p style={showWhenPlanting}><b>termin nasadzeń: </b>{ mainDate }</p>
      {/* <p>{mainDate}</p> */}
      <button type="submit" onClick={removeSchedule}>usuń wpis</button>
      <button type="submit" onClick={toggleVisibility}>{label}</button>
    </div>
  )
}

export default Schedule