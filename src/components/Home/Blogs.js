import Card from '../UI/Card/Card';
import styles from './Blogs.module.css';

const Blogs = (props) =>{
    return (
        <Card className={`${styles.items} ${props.className}`}>
            <div className={styles.blogs}>
                <h1>{props.feed[0].title}</h1>
                <p>{props.feed[0].description}</p>
            </div>
            <div className={styles.blogs}>
                <h1>{props.feed[1].title}</h1>
                <p>{props.feed[1].description}</p>
            </div>
            <div className={styles.blogs}>
                <h1>{props.feed[2].title}</h1>
                <p>{props.feed[2].description}</p>
            </div>
            <div className={styles.blogs}>
                <h1>{props.feed[3].title}</h1>
                <p>{props.feed[3].description}</p>
            </div>
            <div className={styles.blogs}>
                <h1>{props.feed[4].title}</h1>
                <p>{props.feed[4].description}</p>
            </div>
            <div className={styles.blogs}>
                <h1>{props.feed[5].title}</h1>
                <p>{props.feed[5].description}</p>
            </div>
            
    </Card>
    );
}

export default Blogs;
