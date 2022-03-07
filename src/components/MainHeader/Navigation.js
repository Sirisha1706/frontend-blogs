import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
          {/* <li>
            <Link to='/Register'>
            <button >Register</button>
            </Link>
          </li> */}
  
        {props.isLoggedIn && (
          <li>
            <button>Create</button>
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
