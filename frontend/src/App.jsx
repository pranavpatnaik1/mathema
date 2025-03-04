// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Topics from './Topics.jsx'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;