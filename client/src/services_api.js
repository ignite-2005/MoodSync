const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export async function getMoods() {
  const r = await fetch(`${API_BASE}/api/moods`);
  return r.json();
}

export async function classifyText(text) {
  const r = await fetch(`${API_BASE}/api/moods/classify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  return r.json();
}

export async function getPlaylists(mood) {
  const url = new URL(`${API_BASE}/api/playlists`);
  if (mood) url.searchParams.set('mood', mood);
  const r = await fetch(url);
  return r.json();
}

export async function submitFeedback(payload) {
  const r = await fetch(`${API_BASE}/api/feedback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return r.json();
}
