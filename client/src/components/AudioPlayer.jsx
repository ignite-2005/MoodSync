import React from 'react';

export default function AudioPlayer({ title, url }) {
  return (
    <div className="card" style={{ marginTop: 10 }}>
      <div><strong>{title}</strong></div>
      <div className="small">Link: <a href={url} target="_blank" rel="noreferrer">{url}</a></div>
    </div>
  );
}
