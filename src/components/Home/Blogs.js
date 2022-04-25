
import { useState } from 'react';
import Card from '../UI/Card/Card';
import styles from './Blogs.module.css';

const Blogs = (props) =>{
    const [readMore,setReadMore]=useState(false);
    const linkName=readMore?'Read less <<':'Read More >>';
    return (
         <Card className={`${styles.items} ${props.styles}`}>
            <div className={styles.blogs}>
                <h3>{props.feed[0].title}</h3>
                <a className={styles.read_more_link} onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                {readMore && <p className={styles.extra_content}>{props.feed[0].description}</p>}
            </div>
            <div className={styles.blogs}>
                <h3>{props.feed[1].title}</h3>
                <a className={styles.read_more_link} onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                {readMore && <p className={styles.extra_content}>{props.feed[1].description}</p>}
            </div>
            <div className={styles.blogs}>
                <h3>{props.feed[2].title}</h3>
                <a className={styles.read_more_link} onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                {readMore && <p className={styles.extra_content}>{props.feed[2].description}</p>}
            </div>
            <div className={styles.blogs}>
                <h3>{props.feed[3].title}</h3>
                <a className={styles.read_more_link} onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                {readMore && <p className={styles.extra_content}>{props.feed[3].description}</p>}
            </div>
            <div className={styles.blogs}>
                <h3>{props.feed[4].title}</h3>
                <a className={styles.read_more_link} onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                {readMore && <p className={styles.extra_content}>{props.feed[4].description}</p>}
            </div>
            <div className={styles.blogs}>
                <h3>{props.feed[5].title}</h3>
                <a className={styles.read_more_link} onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                {readMore && <p className={styles.extra_content}>{props.feed[5].description}</p>}
            </div>
            
    </Card>
    );
}

export default Blogs;
