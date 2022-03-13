import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Register.module.css';


const Register = (props) =>{
    let navigator = useNavigate();
    const submitHandler = event =>{
    navigator('/', {replace: true});
    };
    return(
        <Card className={classes.register}>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                <label htmlFor='fullname'>Full Name</label>
                <input
                type="text"
                //value="Name"
                />
                </div>
                <div className={classes.control}>
                <label htmlFor="email">E-Mail</label>
                <input
                type="email"
                //value='email'
                />
                </div>
                <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                //value='password'
                />
                </div>
                <div className={classes.control}>
                <label htmlFor="password">Re-Enter Password</label>
                <input
                type="password"
                //value='password'
                />
                </div>
                <div className={classes.actions}>
                <Button type="submit" className={classes.btn}>
                Register
                </Button>
                </div>
            </form>
        </Card>

    );

}

export default Register;