import React, { useState } from 'react'

const Schedule = ({ schedule, removeSchedule, toggleVisibility }) => {
  const [expanded, setExpanded] = useState(false)

  const label = schedule.visible
    ? 'oznacz jako nieaktualne'
    : 'oznacz jako aktualne'

  const showWhenClipping = { display: schedule.clipping ? '' : 'none' }
  const showWhenPlanting = { display: schedule.clipping ? 'none' : '' }

  const hideWhenExpanded = { display: expanded ? 'none' : '' }
  const showWhenExpanded = { display: expanded ? '' : 'none' }

  const scheduleStyle = {
    border: 'solid',
    padding: 10,
    margin: 15
  }

  const calculateColor = () => {
    const ddeadline = new Date(schedule.deadline)
    const currentDate = new Date()

    const timeDiff = ddeadline.getTime() - currentDate.getTime()
    const dayDiff = timeDiff / (1000 * 3600 * 24)
    const hourDiff = timeDiff / 36e5

    if (dayDiff < 0) {
      return [
        {
          color: 'gray'
        },
        dayDiff.toFixed(0)
      ]
    } else if (dayDiff < 1) {
      return [
        {
          color: 'darkred'
        },
        null,
        hourDiff.toFixed(0)
      ]
    } else if (dayDiff < 14) {
      return [
        {
          color: 'red'
        },
        dayDiff.toFixed(0)
      ]
    } else {
      return [
        {
          color: 'green'
        },
        dayDiff.toFixed(0)
      ]
    }
  }

  const result = calculateColor()
  const deadlineIsComing = result[0]
  const days = result[1]
  const hours = result[2]

  const showBeforeDeadline = { display: days >= 1 ? '' : 'none' }
  const showOnDeadlineDay = { display: days >= 0 && days < 1 ? '': 'none' }
  const showAfterDeadline = { display: days < 0 ? '' : 'none' }

  return (
    <div style={scheduleStyle}>
      <div style={showBeforeDeadline}>
        <p style={deadlineIsComing}><b>dni do upłynięcia terminu: {days}</b></p>
      </div>
      <div style={showOnDeadlineDay}>
        <p style={deadlineIsComing}><b>godzin do upłynięcia terminu: {hours}</b></p>
      </div>
      <div style={showAfterDeadline}>
        <p style={deadlineIsComing}><b>dni po terminie: {-days}</b></p>
      </div>
      <p><b>obiekt: </b>{ schedule.object }</p>
      <p style={showWhenClipping}><b>termin wycinki: </b>{ schedule.deadline.split('T')[0] }</p>
      <p style={showWhenPlanting}><b>termin nasadzeń: </b>{ schedule.deadline.split('T')[0] }</p>
      <div style={hideWhenExpanded}>
        <button onClick={() => setExpanded(!expanded)}>pokaż więcej</button>
      </div>
      <div style={showWhenExpanded}>
        <p><b>inwestor: </b>{ schedule.investor }</p>
        <p><b>projektant: </b>{ schedule.designer }</p>
        <p><b>data złożenia wniosku: </b>{ schedule.applicationDate.split('T')[0] }</p>
        <p><b>data wydania decyzji: </b>{ schedule.decisionDate.split('T')[0] }</p>
        <button onClick={() => setExpanded(!expanded)}>pokaż mniej</button>
        <button type="submit" onClick={removeSchedule}>usuń wpis</button>
        <button type="submit" onClick={toggleVisibility}>{label}</button>
      </div>
    </div>
  )
}

export default Schedule