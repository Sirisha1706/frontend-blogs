import React from 'react';
import {Route ,BrowserRouter, Routes} from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Create from './components/Create/Create';
import Register from './components/Register/Register';


function App() {

  return (
    <React.Fragment>
       <BrowserRouter>
      <MainHeader/>
        <Routes>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/create' element={<Create/>}/>
         <Route exact path='/' element={<Home/>}></Route>
         <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
