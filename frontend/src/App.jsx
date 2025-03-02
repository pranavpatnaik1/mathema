import React from 'react';
import './App.css';

const App = () => {
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

        <hr />

        <div className='course-circle'></div>
        <div className='topics'>
            <button className='topic-box1'>Discrete Mathematics</button>
        </div>

        <div className='get-started'>
            <h2>get started.</h2>
            <p className='subtitle'><i>try our <u>recommended roadmap:</u></i></p>
            <div className='course'>
                <img src="mathema problem page.png" width="480px" height="249px" alt="" className='course-img'/>
                <p className='course-title'><b><u>course: Linear Algebra</u></b></p>
                <p className='course-desc'>This course provides a comprehensive introduction to linear algebra, covering fundamental concepts and their applications. Topics include vector spaces, linear transformations, matrices, determinants, eigenvalues and eigenvectors, inner product spaces, and orthogonality. Students will learn how to solve systems of linear equations, perform matrix operations, and explore the theoretical foundations of linear algebra. Applications in computer science, physics, engineering, and data science will be highlighted throughout the course. By the end, students will develop both computational skills and a deep conceptual understanding of the subject.</p>
            </div>
            
        </div>
      </main>
    
    </div>
  );
};

export default App;
