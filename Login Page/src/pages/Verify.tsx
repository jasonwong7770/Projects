import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Verify() {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState("")
  const location = useLocation()
  const navigate = useNavigate()

  async function handleVerify() {
  const { error: verifyError } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: 'signup'
  })

  if (verifyError) {
    setError(verifyError.message)
    return
  }

  navigate('/')
}

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
      <input type="text" placeholder="Enter 6-digit code" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={6}/><br/>
      <button onClick={handleVerify}>Verify</button>
      {error && <p className="text-red-500">{error}</p>}
    </>
  )
}

export default Verify