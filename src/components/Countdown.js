import React from 'react'

const Countdown = ({ schedule }) => {
  const calculateColor = () => {
    const deadline = new Date(schedule.deadline)
    const currentDate = new Date()

    const timeDiff = deadline.getTime() - currentDate.getTime()
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
  return(
    <div>
      <div style={showBeforeDeadline}>
        <p style={deadlineIsComing}><b>dni do upłynięcia terminu: {days}</b></p>
      </div>
      <div style={showOnDeadlineDay}>
        <p style={deadlineIsComing}><b>godzin do upłynięcia terminu: {hours}</b></p>
      </div>
      <div style={showAfterDeadline}>
        <p style={deadlineIsComing}><b>dni po terminie: {-days}</b></p>
      </div>
    </div>
  )
}

export default Countdown