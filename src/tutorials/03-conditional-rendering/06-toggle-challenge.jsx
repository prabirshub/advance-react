import { useState } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)
  // const toggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false)
  //     return
  //   }
  //   setShowAlert(true)
  // }
  return (
    <div>
      <h2>Toggle challenge</h2>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  )
}

const Alert = () => {
  return <div className='alert alert-danger'>Hello world</div>
}
export default ToggleChallenge
