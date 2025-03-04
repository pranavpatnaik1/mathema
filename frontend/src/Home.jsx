// Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Course data
  const courses = [
    {
      title: "Discrete Mathematics",
      description:
        "This course explores logic, set theory, combinatorics, graph theory, and proof techniques. Essential for computer science and mathematical reasoning.",
      image: "discrete-math.png",
    },
    {
      title: "Calculus I-III",
      description:
        "Covers limits, derivatives, integrals, multivariable calculus, and vector calculus. Essential for physics, engineering, and economics.",
      image: "calculus.jpg",
    },
    {
      title: "Linear Algebra",
      description:
        "Covers vector spaces, matrices, determinants, eigenvalues, and applications in computer science, physics, and data science.",
      image: "linear-algebra.jpeg",
    },
    {
      title: "Probability & Statistics",
      description:
        "Learn probability theory, statistical inference, distributions, hypothesis testing, and data analysis techniques.",
      image: "probability.jpeg",
    },
    {
      title: "Combinatorics",
      description:
        "Study counting techniques, permutations, graph theory, and combinatorial proofs, with applications in CS and discrete math.",
      image: "combinatorics.jpeg",
    },
  ];

  // State to track the selected course and trigger animation
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setAnimationTrigger(!animationTrigger); // Toggle to re-trigger animation
  };

  return (
    <>
      <div className="math-graphics">
        <svg className="line" width="900" height="900" viewBox="0 0 800 500">
          <path d="M300,600 L800,0" />
        </svg>
        <svg className="rotating-arc" width="2000" height="2000" viewBox="0 0 2000 2000">
          <circle cx="1000" cy="1100" r="800" stroke="white" strokeWidth="5" strokeDasharray="5029" strokeDashoffset="5029" className="draw-in" fill="none" />
        </svg>
      </div>

      <header className="header">
        <div className="logo">
          <img src="/final logo.png" alt="logo" className="logo-circle" />
          <span>mathema</span>
        </div>
        <Link to="/login" className="login-btn"><b>login</b></Link>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1><i>mathematics,</i><br /><i>reinvented.</i></h1>
          <p>build mathematic intuition, <b>the right way.</b></p>
          <Link to="/topics" className="explore-btn"><b>explore topics</b></Link>
        </section>

        <img src="/mathema problem page.png" alt="" className="interface-placeholder " />

        <section className="learn-math-today">
          <div className="text-content">
            <h2><u>learn math today.</u></h2>
            <p style={{ marginTop: '15px' }}>select a topic, explore practice</p>
            <p style={{ marginTop: '5px' }}>problems, and receive instant</p>
            <p style={{ marginTop: '5px' }}>feedback.</p>
          </div>
          <img src="/image 10.png" alt="graph" className="image-placeholder" />
        </section>

        <div className="video-tut">
          <p className='placeholder-text'>video</p>
        </div>

        <div className='course-circle'></div>
        
        {/* Course Details */}
        <div className='get-started'>
          <h2>get started.</h2>
          <p className='subtitle'><i>try our <u>recommended roadmap:</u></i></p>
          <div className={`course fade-trigger`} key={animationTrigger}>
            <img src={selectedCourse.image} width="480px" height="249px" alt="" className='course-img'/>
            <p className='course-title'><b>{selectedCourse.title}</b></p>
            <p className='course-desc'>{selectedCourse.description}</p>
          </div>
          
          {/* Topic boxes now after course description */}
          <div className='topics'>
            <div>
              <button className="topic-box1" onClick={() => handleCourseClick(courses[0])}>
                {courses[0].title}
              </button>
              <button className="topic-box2" onClick={() => handleCourseClick(courses[1])}>
                {courses[1].title}
              </button>
              <button className="topic-box3" onClick={() => handleCourseClick(courses[2])}>
                {courses[2].title}
              </button>
            </div>
            <div>
              <button className="topic-box4" onClick={() => handleCourseClick(courses[3])}>
                {courses[3].title}
              </button>
              <button className="topic-box5" onClick={() => handleCourseClick(courses[4])}>
                {courses[4].title}
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className='our-mission'>
            <i><u>our mission</u></i>
          </h2>
          <div className='mission-stmt'>
            <p style={{marginBottom: "30px"}}><b>"math is boring."</b> </p>
            <p style={{marginBottom: "30px"}}>with confusing explanations, abstract problems that feel disconnected from reality, and a system that prioritizes memorization over understanding, it's no surprise why so many people think so.</p>
            <p style={{marginBottom: "30px"}}><b><b className="company-name" style={{textShadow: "0px 2px 10px rgb(40, 40, 40)", textStroke: "1px  white"}}>mathema</b></b> exists to change that.</p>
            <p style={{marginBottom: "30px"}}>we believe math should be intuitive, visual, and deeply engaging. instead of rote learning, we focus on building true mathematical intuition—breaking down complex concepts into interactive experiences that make sense. </p>
            <p style={{marginBottom: "30px"}}>whether you're a student, a professional, or just someone curious about the world, mathema helps you see math not as a chore, but as a tool to think, create, and discover.</p>
            <p style={{marginBottom: "30px"}}>enjoy.</p>
          </div>
        </div>
        
        <div className='love'>
          made w/ love, <a href="https://www.instagram.com/pranavpatnaik_/" target="_blank" className='love-link'>@pranavpatnaik_</a>
        </div>
      </main>
    </>
  );
};

export default Home;