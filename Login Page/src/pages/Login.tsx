import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

function Login(){
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleLogin() {
  const { error: loginError } = await supabase.auth.signInWithPassword({
    email: identifier,
    password,
  })

  if (loginError) {
    setError(loginError.message)
    return
  }

  navigate('/')
}

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <input type="text" placeholder="Username or Email" value={identifier} onChange={(e) => setIdentifier(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleLogin}>Login</button> <br/>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default Login