import { useState } from "react";
import Card from "../UI/Card/Card";
import classes from './Create.module.css';
import Button from '../UI/Button/Button';


const Create = props =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [entereddesp, setEnteredDesp] = useState('');

    const titleChange=event=>{
        setEnteredTitle(event.target.value);
    };
    const despChange=event=>{
        setEnteredDesp(event.target.value);
    };

    const submitHandler=event =>{
        event.preventDefault();

        const blogdata={
            title:enteredTitle,
            description:entereddesp
        };

        props.onSaveBlogData(blogdata);
        setEnteredDesp('');
        setEnteredTitle('');
    };
    return(
        <Card className={classes.create}>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input
                    type="text"
                    onChange={titleChange}
                    />
                </div>
                <div className={classes.control}>
                <label htmlFor='descp'>Description</label>
                <input
                type="text"
                onChange={despChange}
                />
                </div>
                <div className={classes.actions}>
                <Button type="submit" className={classes.btn}>
                Add Blog
                </Button>
                </div>
            </form>
        </Card>
    );
}

export default Create;