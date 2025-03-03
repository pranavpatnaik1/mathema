import React, { useState } from 'react';
import './App.css';

const App = () => {
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
    <div className="app">
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
        <a href="#" className="login-btn"><u>login</u></a>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1><i>mathematics,</i><br /><i>reinvented.</i></h1>
          <p>build mathematic intuition, <b>the right way.</b></p>
          <button className="explore-btn"><strong>explore topics</strong></button>
        </section>

        <div className="shine-background"></div>
        <img src="/mathema problem page.png" alt="" className="interface-placeholder" />

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
        

        {/* Course Selection Buttons */}
        <div className='topics'>
          {courses.map((course, index) => (
            <button
              key={index}
              className={`topic-box${index + 1}`}
              onClick={() => handleCourseClick(course)}
            >
              {course.title}
            </button>
          ))}
        </div>

        {/* Course Details */}
        <div className='get-started'>
          <h2>get started.</h2>
          <p className='subtitle'><i>try our <u>recommended roadmap:</u></i></p>
          <div className={`course fade-trigger`} key={animationTrigger}>
            <img src={selectedCourse.image} width="480px" height="249px" alt="" className='course-img'/>
            <p className='course-title'><b>{selectedCourse.title}</b></p>
            <p className='course-desc'>{selectedCourse.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
