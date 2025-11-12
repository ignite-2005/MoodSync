import React from 'react';

const moods = [
  { label: 'Happy 😊', value: 'Happy', color: '#ffb703' },
  { label: 'Sad 😢', value: 'Sad', color: '#8ecae6' },
  { label: 'Focused 🎧', value: 'Focused', color: '#219ebc' },
  { label: 'Relaxed 🧘', value: 'Relaxed', color: '#90be6d' },
  { label: 'Energetic ⚡', value: 'Energetic', color: '#fb8500' },
  { label: 'Tired 😴', value: 'Tired', color: '#adb5bd' }
];

export default function MoodButtons({ onPick }) {
  return (
    <div>
      {moods.map(m => (
        <button key={m.value} style={{ borderColor: m.color }} onClick={() => onPick(m)} className="mood">
          {m.label}
        </button>
      ))}
    </div>
  );
}
