import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const errorNotificationStyle = {
    border: 'solid',
    borderColor: 'red',
    color: 'red',
    padding: 10,
    margin: 15
  }

  return (
    <div style={errorNotificationStyle} className="error">
      {message}
    </div>
  )
}

export default Notification