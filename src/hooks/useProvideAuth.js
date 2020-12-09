import React from 'react'
import fakeAuth from '../fakeAuth'

function useProvideAuth() {
  const [user, setUser] = React.useState(null)
  const signin = React.useCallback(cb => {
    return fakeAuth.signin(() => {
      setUser('user')
      cb()
    })
  })
  const signout = React.useCallback(cb => {
    return fakeAuth.signout(() => {
      setUser(null)
      cb()
    })
  })

  return {
    user,
    signin,
    signout,
  }
}

export default useProvideAuth
