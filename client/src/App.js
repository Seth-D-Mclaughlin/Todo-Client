import React, { useState, useEffect } from 'react'
import './App.css'
import Typography from '@material-ui/core/Typography'
import Sitebar from './Navbar/Navbar'
import Auth from './Auth/Auth'
import SplashIndex from './Splash/SplashIndex'
import Navbar from './Navbar/Navbar'

function App() {
  const [sessionToken, setSessionToken] = useState(undefined)
  console.log(sessionToken)

  const protectedView = () => {
    return sessionToken !== undefined ? (
      <SplashIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    )
  }

  const updateToken = (newToken) => {
    localStorage.setItem('token: ', newToken)
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear()
    setSessionToken(undefined)
  }

  return (
    <div>
      <Sitebar clearToken={clearToken} />
      {protectedView()}
      <Navbar/>
    </div>
  )
}

export default App
