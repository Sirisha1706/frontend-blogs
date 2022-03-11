import React, { useState, useEffect } from 'react';
import {Route ,BrowserRouter, Routes} from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() =>{
    const userLogin = localStorage.getItem('loggedIn');

  if (userLogin === '1'){
    setIsLoggedIn(true)
  }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('loggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
         <BrowserRouter>
        <Routes>
         {!isLoggedIn && <Login onLogin={loginHandler} /> &&
        <Route exact path='/register' element={<Register/>}/>}
        {isLoggedIn && <Home onLogout={logoutHandler} />&&
        <Route exact path='/create' element={<Create/>}/>}
        </Routes>
        </BrowserRouter>
        
      </main>
    </React.Fragment>
  );
}

export default App;
