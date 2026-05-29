import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit() {
    console.log(username, email, password)
    if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email")
    } else if (password.length < 8){
      setError("Password must be at least 8 characters")
    } else if (password !== passwordConfirm) {
      setError("Confirmation password does not match with original password")
    } else {
      navigate('/verify', {
        state: { username, email }
      })
    }
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <input type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} /><br/>
      <button onClick={handleSubmit}>Sign Up</button> <br/>
      {error && <p className="text-red-500">{error}</p>}
    </>
  )
}

export default Signup