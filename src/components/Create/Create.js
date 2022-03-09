import Card from "../UI/Card/Card";
import classes from './Create.module.css';

const Create = props =>{
    return(
        <Card className={classes.register}>
            <form >
                <div className={classes.control}>
                    <label htmlFor='title'></label>
                    <input
                    type="text"
                    id="title"
                    //value="Name"
                    />
                </div>
                <div className={classes.control}>
                <label htmlFor='descp'></label>
                <input
                type="text"
                id="description .........."
                //value="Name"
                />
                </div>
            </form>
        </Card>
    );
}

export default Create;