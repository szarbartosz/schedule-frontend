import React from 'react'

const Schedule = ({ schedule }) => {
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
      <p><b>termin wycinki: </b>{ schedule.clippingDeadline.split('T')[0] }</p>
      <p><b>termin nasadzeń: </b>{ schedule.plantingDeadline.split('T')[0] }</p>
    </div>
  )
}

export default Schedule