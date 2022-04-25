import React from 'react';
import ReactDOM from 'react-dom';
import {Route ,BrowserRouter, Routes} from 'react-router-dom';

import './index.css';
import App from './App';
import Register from './components/Register/Register';
import Create from './components/Create/Create';

ReactDOM.render(
        <BrowserRouter>
        <Routes>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/create' element={<Create/>}/>
        </Routes>
        <App />
        </BrowserRouter>, 
        document.getElementById('root')
      );
