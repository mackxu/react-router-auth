import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function LoginPage() {
  const history = useHistory()
  const location = useLocation()
  const auth = useAuth()

  const { from } = location.state ?? { from: { pathname: '/' } }

  const login = () => {
    auth.signin(() => {
      history.replace(from)
    })
  }
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default LoginPage
