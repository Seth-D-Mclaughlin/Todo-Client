import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets/logo.png";
import Navbar from "./Navbar/Navbar";
import Auth from "./Auth/Auth";
import SplashIndex from "./Splash/SplashIndex";
import { render } from "@testing-library/react";

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);

  const viewConductor = () => {
    return sessionToken !== undefined ? 
      <SplashIndex token={sessionToken}/> :
      <Auth updateToken={updateToken}/>
  }

  const updateToken = newToken => {
    localStorage.setItem('token: ', newToken);
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  return (
    <div className="App">
      <Navbar />
      <Auth />
      {viewConductor()}
      
    </div>
  );
}

export default App;
