import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Mood from './pages/Mood';
import Playlists from './pages/Playlists';
import StudyTips from './pages/StudyTips';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [theme, setTheme] = useState('#888'); // simple accent that changes with mood
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', theme);
  }, [theme]);

  return (
    <>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/mood">Mood</Link>
        <Link to="/playlists">Playlists</Link>
        <Link to="/study-tips">Study Tips</Link>
        <Link to="/team">Team</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home setTheme={setTheme} />} />
          <Route path="/mood" element={<Mood setTheme={setTheme} />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/study-tips" element={<StudyTips />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <footer>© {new Date().getFullYear()} MoodSync</footer>
    </>
  );
}

export default App;
