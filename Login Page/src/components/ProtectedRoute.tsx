import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

function ProtectedRoute(){
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
}

export default ProtectedRoute