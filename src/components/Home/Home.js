import React from 'react';
import Blogs from './Blogs';
import classes from './Home.module.css';

const Home = (props) => {
  const blogs = [
    {
      id:1,
      title: 'hello',
      description:'welcome'
    },
    {
      id:2,
      title: 'namaste',
      description:'aaeye'
    },
    {
      id:3,
      title: 'aadab',
      description:'swagat hai'
    },
    {
      id:4,
      title: 'aadab',
      description:'swagat hai'
    },
    {
      id:5,
      title: 'aadab',
      description:'swagat hai'
    },
    {
      id:6,
      title: 'aadab',
      description:'swagat hai'
    },
  ]
  return (
      <Blogs feed={blogs} className={classes.home}></Blogs>
  );
};

export default Home;
