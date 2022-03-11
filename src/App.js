import React, { useState, useEffect } from 'react';
import {Route ,BrowserRouter, Routes} from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Create from './components/Create/Create';
import Register from './components/Register/Register';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() =>{
    const userLogin = localStorage.getItem('loggedIn');

  if (userLogin === '1'){
    setIsLoggedIn(true)
  }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('loggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
       <BrowserRouter>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} /> }
      </main>
        <Routes>
         {!isLoggedIn && <Route exact path='/register' element={<Register/>}/>}
         {isLoggedIn &&<Route exact path='/create' element={<Create/>}/>}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
