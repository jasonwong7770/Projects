import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

function ProtectedRoute(){ //
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
}

useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session)
    setLoading(false)
  })
}, [])

export default ProtectedRoute