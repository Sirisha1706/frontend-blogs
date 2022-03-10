import React from 'react';
import Blogs from './Blogs';
import classes from './Home.module.css';

const Home = (props) => {
  const blogs = [
    {
      id:2,
      title: 'Homeschooling Experience',
      description:"My husband Keven and I have 3 kids and we’ve been homeschooling for more than 10 years. Here’s a little background of how we got here. Our homeschooling journey started in 2010, after our twin daughters finished kindergarten. We never thought we would homeschool but the preschool and kindergarten years were stressful for everyone. We read some journal articles about how homeschooled children perform just as well as school children in life and university. I was in a time where I was transitioning from my studies to work, and this seemed like a good time to try homeschooling for at least for a year. That is how it started for us. Our twin daughters are now 16 years old and still studying at home. Our son, Damian, 12 years old, has been homeschooled since after preschool."
    },
    {
      id:3,
      title: 'Cure Rare Disease',
      description:'Cure Rare Disease has diligently advanced over the last 3 years in developing the first CRISPR based, customized therapeutic, for not just one, but several rare mutations, most of which have no other opportunity for treatment. The advancements we are making for each of our patients are not just helping the individual, but also educating the space as a whole on various aspects of drug development as well as different approaches that can be used to combat rare disease. We believe that every single person living with rare disease should have the opportunity at life-changing treatment, and we believe that by helping one, this helps the greater rare disease population directly and indirectly.'
    },
    {
      id:4,
      title: 'Overcoming Obstacles',
      description:'“Do not expect much from him.”  These are the words a neurologist told my parents when I was diagnosed at four-years old with a rare neuromuscular disease.  The doctor did not intend them as malicious, but instead was arming my parents with the knowledge that the world is not designed for those with physical disabilities to succeed. I was not the first rare disease patient to have this judgement placed upon me and will definitely not be the last.  However, as a scientist researching the treatment for my own disease, I can say that I did not let those words decide my future; and I hope that many others can do the same. My name is Justin Cohen, and I was born with Facioscapulohumeral muscular dystrophy (FSHD), a rare and progressive neuromuscular disorder with a wide range of severity.'
    },
    {
      id:5,
      title: 'Games Can Help',
      description:'When I was six years old, I distinctly remember going over to one of my cousin’s homes, where he showed me the cutting edge technology of the day: the Atari 800. This thing was a glorious beige box with not one, but two cartridge ports, and he even had the cassette attachment. That’s right, an honest to goodness cassette that was used to load up some of the bigger programs that the Atari could power. I ended up using that Atari as my entry into video games. My dad and I would play a game called River Raid on Sunday afternoon, carefully traversing through a canyon while dodging incoming fire from ships and planes. We’d check out Pac-Man who, at the time, was the biggest celebrity on Earth. And I even learned how to code in a computer language called Basic, which essentially was me painstakingly copying hundreds of lines of code to make an 8-bit fireworks show that would rival the biggest celebration this side of Disney World.'
    },
    {
      id:6,
      title: 'Clinical trials',
      description:'During this season of joy, one of the starkest reminders of the emotional rollercoaster of Duchenne is clinical trials. So, you have two children with a rare genetic disorder. You start discussing the clinical trials that you have been hearing about through the community.  You are grateful and hopeful because there were not any trials available when you received the devastating double diagnosis in 2013. But which one do you choose, what are you willing to put your children through, and what if you choose wrong?. You go through the different trials based on eligibility criteria and what tests you are willing to have your boys go through. To be honest, when I read the 20-page consent paperwork, I didn’t really read it. What it said was not going to change my decision. We had no option if we wanted to try and save our sons; especially my older son who was approaching the dreaded clinical trial cutoff age. '
    },
    {
      id:1,
      title: 'CODING HORROR',
      description:"To be clear, I am betting against because I think everyone is underestimating how difficult fully autonomous driving really is. I am by no means against self driving vehicles in any way! I'd much rather spend my time in a vehicle reading, watching videos, or talking to my family and friends … anything, really, instead of driving. I also think fully autonomous vehicles are a fascinating, incredibly challenging computer science problem, and I want everyone reading this to take it as just that, a challenge. Prove me wrong! Make it happen by 2030, and I'll be popping champagne along with you and everyone else!"
    },
  ]
  return (
      <Blogs feed={blogs} style={classes.home}></Blogs>
  );
};

export default Home;
