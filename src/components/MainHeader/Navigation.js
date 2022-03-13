import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import classes from './Navigation.module.css';
// import Create from '../Create/Create';
// import Register from '../Register/Register';

const Navigation = (props) => {
  let navigator = useNavigate();
  const submitHandler = event =>{
    event.preventDefault();
    navigator('/login', {replace:true});
  }
  return (
    <nav  className={classes.nav}>
      <form onSubmit={submitHandler}>
      <ul>
          <li>
            <Link to ='/login'> 
            <button>SignIn/SignUp</button>
            </Link>
          </li>
      </ul>
      </form>
    </nav>
  );
};

export default Navigation;
