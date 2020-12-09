import React from 'react'
import { useHistory } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function AuthButton() {
  const history = useHistory()
  const auth = useAuth()
  const logout = () => {
    auth.signout(() => {
      history.push('/')
    })
  }
  return auth.user ? (
    <div>
      欢迎，欢迎 <button onClick={logout}>退出</button>
    </div>
  ) : (
    <div>你还未登录</div>
  )
}

export default AuthButton
