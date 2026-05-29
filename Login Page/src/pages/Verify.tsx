import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Verify() {
  const [otp, setOtp] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state) {
      navigate('/')
    }
  }, [])

  if (!location.state) return null

  const { username, email } = location.state

  return (
    <>
      <h1>Welcome {username}!</h1>
      <p>A code has been sent to {email}</p>
    </>
  )
}

export default Verify