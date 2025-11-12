import React from 'react';
import MoodButtons from '../components/MoodButtons';
import { useNavigate } from 'react-router-dom';

export default function Home({ setTheme }) {
  const navigate = useNavigate();
  function onPick(m) {
    setTheme(m.color);
    navigate('/playlists?mood=' + m.value);
  }
  return (
    <div>
      <h1>Welcome to MoodSync</h1>
      <p className="small">Pick a mood to get a playlist suggestion or head to Study Tips for focus routines.</p>
      <MoodButtons onPick={onPick} />
    </div>
  );
}
