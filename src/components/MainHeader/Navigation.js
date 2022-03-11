import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navigation.module.css';
// import Create from '../Create/Create';
// import Register from '../Register/Register';

const Navigation = (props) => {
  const saveDate = (enteredData)=>{
      const blogData = {
        ...enteredData,
        id: Math.random()
      };
      console.log(blogData);
  };
  return (
    <nav  className={classes.nav}>
      <ul>
        {!props.isLoggedIn &&(
          <li>
            <Link to={{pathname:'/register', state:{from:"onSaveData"}}}>
            <button>Register</button>
            </Link>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Link to='/create'>
            <button type='submit'>Create</button>
            </Link>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
