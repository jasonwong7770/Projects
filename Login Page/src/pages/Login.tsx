import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login(){
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleLogin() {
    console.log(identifier, password)
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