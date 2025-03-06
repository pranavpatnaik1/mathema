import React from 'react';
import "./styling/Topics.css"

const Topics = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src="/final logo.png" alt="logo" className="logo-circle" />
                    <span>mathema</span>
                </div>
            </header>

            <div  className="topics-container">
                <div className='title'> 
                    problem sets
                </div>
                <button className='topic-button'>Linear Algebra</button>
                <button className='topic-button'>Discrete Mathematics</button>
                <button className='topic-button'>Calculus I</button>
                <button className='topic-button'>Calculus II</button>
                <button className='topic-button'>Calculus III</button>
            </div>
            
        </>
    );
};

export default Topics;