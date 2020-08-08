import React, {useState, useEffect} from 'react';
import Sitebar from './Navbar/Navbar';
import Auth from './Auth/Auth';
import SplashIndex from './Splash/SplashIndex';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined); 
    console.log(sessionToken);

  const protectedView = () => {
    return sessionToken !== undefined ?
      <SplashIndex token={sessionToken}/> :
      <Auth/>
  }

  return (
    <div >
        <Sitebar setSession={setSessionToken} />
        {protectedView()}
    </div>
  );
}

export default App;
