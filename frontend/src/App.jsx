import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="math-graphics">
        <svg className="line" width="900" height="900" viewBox="0 0 800 500">
          <path d="M300,600 L800,0" />
        </svg>
        <svg className="circle" width="800" height="600" viewBox="0 0 800 600">
          <circle cx="330" cy="500" r="300" />
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
          <p>build mathematic intuition, the right way.</p>
          <button className="explore-btn"><strong>explore topics</strong></button>
        </section>

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

        <button className="start-now"><strong>start now</strong></button>
      </main>
    </div>
  );
};

export default App;
