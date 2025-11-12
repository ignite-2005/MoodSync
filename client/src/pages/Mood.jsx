import React, { useState } from 'react';
import MoodButtons from '../components/MoodButtons';
import { classifyText } from '../services_api';

export default function Mood({ setTheme }) {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  async function handleClassify() {
    const r = await classifyText(text);
    setResult(r);
    const colorMap = {
      Happy: '#ffb703', Sad: '#8ecae6', Focused: '#219ebc',
      Relaxed: '#90be6d', Energetic: '#fb8500', Tired: '#adb5bd'
    };
    setTheme(colorMap[r.mood] || '#888');
  }

  return (
    <div>
      <h1>How do you feel?</h1>
      <textarea placeholder="Type how you feel... e.g., I feel tired" value={text} onChange={e => setText(e.target.value)} rows={4} />
      <button onClick={handleClassify} style={{ marginTop: 8 }}>Classify</button>
      {result && <div className="card" style={{ marginTop: 12 }}>
        <div>Detected mood: <strong>{result.mood}</strong></div>
        <a href={`/playlists?mood=${encodeURIComponent(result.mood)}`}>See playlists</a>
      </div>}
      <h2>Or pick directly</h2>
      <MoodButtons onPick={(m)=> setTheme(m.color)} />
    </div>
  );
}
