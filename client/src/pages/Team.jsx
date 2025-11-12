import React from 'react';

export default function Team() {
  const team = [
    { name: 'Supreeth K Simha', role: 'Frontend & Integrations', city: 'Bengaluru, Karnataka', phone: '+91 98765 43210' },
    { name: 'Surjo Sarkar', role: 'Backend & Database', city: 'Kolkata, West Bengal', phone: '+91 91234 56789' },
    { name: 'Sumukh A S', role: 'UI/UX & Testing', city: 'Mysuru, Karnataka', phone: '+91 99876 54321' },
  ];
  return (
    <div>
      <h1>Team</h1>
      {team.map(m => (
        <div key={m.name} className="card" style={{ marginTop: 10 }}>
          <strong>{m.name}</strong>
          <div className="small">{m.role}</div>
          <div className="small">{m.city} • {m.phone}</div>
        </div>
      ))}
    </div>
  );
}
