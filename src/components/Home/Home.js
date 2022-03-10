import React from 'react';
import Blogs from './Blogs';
import classes from './Home.module.css';

const Home = (props) => {
  const blogs = [
    {
      id:1,
      title: 'Homeschooling Experience',
      description:"My husband Keven and I have 3 kids and we’ve been homeschooling for more than 10 years. Here’s a little background of how we got here. Our homeschooling journey started in 2010, after our twin daughters finished kindergarten. We never thought we would homeschool but the preschool and kindergarten years were stressful for everyone. We read some journal articles about how homeschooled children perform just as well as school children in life and university. I was in a time where I was transitioning from my studies to work, and this seemed like a good time to try homeschooling for at least for a year. That is how it started for us. Our twin daughters are now 16 years old and still studying at home. Our son, Damian, 12 years old, has been homeschooled since after preschool. Damian’s journey is very different from his sisters. Damian was diagnosed with Duchenne’s Muscular Dystrophy at 8 y.o and is neuro-divergent, with ADHD. At a young age he struggled with self-regulation in group classes. Damian really benefited from homeschooling, because we could customize and adjust his schooling as he needed. For our daughters, homeschool is a choice, whereas for Damian it felt almost necessary because there were no other viable options locally.Things to think about when you are thinking about homeschooling: Community - Find your local homeschool community. We learned that if you look, you will find them . Most groups are on Facebook. There was a bigger group in the city but we didn’t have one in our community, so we created one and found a great group of homeschoolers in our neighbourhood. Your team - Homeschooling will be way easier and more successful when all the parents, guardians, or adults providing care are on the same page. Parenting is a full time job and when you start homeschooling it can feel like you’re a teacher and a parent all at once. Having a partner to give you time off to be more patient, attentive to the kids. It really takes a village to raise a child.Read, and test the waters - We have read and are still reading books about homeschooling, growth mindsets, and learning. We are always learning with our kids. Here are some books that are almost always recommended to homeschooling families:Project-Based Homeschooling – Lori Pickert. The Well-Trained Mind – Susan Wise Bauer & Jessie Wise.How Children Learn - John Holt.\n Teach Your Own - John Holt \n Home Learning Year by Year - Rebecca Rupp\n Mindset: The New Psychology of Success - Carol S. Dweck\nMethods of homeschooling we’ve incorporated in our learning:Unschooling / Homeschooling - There are a few definitions of unschooling, but I’m referring to schooling without aid or guidance from the school board. In Canada, every child must be enrolled in a school. In our first year of homeschooling, we registered the kids under section 12 of the School Act, which provides parents with the statutory right to educate their children at home. It allowed us to just try things without pressure. This option is probably not for you if you like plans and guidance.Distributed Learning (DL) / Online School - This is the method we choose for most of our homeschooling years. This method refers to being registered to a remote or virtual school.  In doing so, you get the benefits of a teacher that follows your child’s learning and some budget for your homeschooling expenses. Depending on the country and province, the school requirements can vary. We reported to our teacher once a week, and had to send reports and reflections of the kids learning every term. The teachers would provide suggestions, but you weren’t required to take them. Often, the school also offers opportunities for all their students to gather for field trips or events.‍Cross-enrolment to local school - We have looked into this option as it would allow the kids to take some courses in-person and join the clubs and school teams, but still gives them time to pursue their own interests. We didn’t go with this option because our daughters felt that they would prefer to do full time school than just attend a portion of the day.But when learning went online we joined an online high school instead and continued homeschooling. Now they have part-time jobs, and pursue their personal interests on the side (like design, orchestra, and writing) while attending the online high school.Homeschooling can be very empowering because it gives you opportunities to customize your learning experience. That being said, it can also be very stressful because the pressure of being accountable for your childrer's education has just suddenly increased. We’ve learned over the last 10 years to celebrate all the wins throughout the day and sometimes these wins are those moments of kindness towards one another. We also learned to put our expectations aside, we try to provide our kids with opportunities to learn and challenge themselves, sometimes they are accepted well and other times completely rejected. We’ve had some very tough days where we questioned our decision to homeschool (especially during math times) but the positives far outweigh those days. We’re learning together with our kids and it's helped us grow stronger as a family.Online Learning:Primer Damian has a deep fascination for space and joined Primer’s Galactic Explorations Pursuit last year.  He stayed on with the community of home learners and has explored many interesting classes every week.  We appreciate the team of instructors for making the classes fun & engaging for everyone."
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
