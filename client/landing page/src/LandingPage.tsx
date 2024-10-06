import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import myGif from './assets/images/abc.gif';

// Landing page component
const LandingPage: React.FC = () => {
  return (
    <div className="App">
      <nav className="Navbar">
        <div className="Nav-left">
          <img src={myGif} alt="Logo GIF" width="100" className="Logo" />
        </div>
      </nav>
      <header className="Hero">
        <h2 className="Main-title">Welcome to Pro Grow</h2>
        <h3 className="Subheading">AI-Powered Lesson Planning for Your Success!</h3>
      </header>

      <div className="Content">
        <div className="Text-section">
          <p className="Description">
            Pro Grow is an AI-driven platform that tracks your learning progress and helps you reach your educational goals. Join us to unlock your full potential with personalized skill-building roadmaps.
          </p>
          <button className="Login-button">
            Click Here to Login or Sign Up
          </button>
        </div>
        <div className="Image-section">
          <img
            src={myGif}
            alt="AI Education"
            className="Illustration"
            width="300"
          />
        </div>
      </div>
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Default route, redirecting to the landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
