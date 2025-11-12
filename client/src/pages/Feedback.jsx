import React, { useState } from 'react';
import { submitFeedback } from '../services_api';

export default function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [ok, setOk] = useState(null);
  const [error, setError] = useState('');

  function update(k, v) {
    setForm(s => ({ ...s, [k]: v }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const r = await submitFeedback(form);
      if (r.ok) {
        setOk(true);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setError(r.msg || 'Server error');
      }
    } catch (err) {
      console.error('Feedback error:', err);
      setError('Network error or backend is down.');
    }
  }

  return (
    <div>
      <h1>Feedback</h1>
      <form className="card" onSubmit={onSubmit}>
        <label>Name<input value={form.name} onChange={e=>update('name', e.target.value)} /></label>
        <label>Email<input value={form.email} onChange={e=>update('email', e.target.value)} /></label>
        <label>Phone<input value={form.phone} onChange={e=>update('phone', e.target.value)} /></label>
        <label>Message<textarea rows={4} value={form.message} onChange={e=>update('message', e.target.value)} /></label>
        <button type="submit" style={{ marginTop: 10 }}>Submit</button>
      </form>

      {ok && <div style={{ color: 'green', marginTop: 10 }}>✅ Thanks! Your feedback was saved.</div>}
      {error && <div style={{ color: 'red', marginTop: 10 }}>❌ {error}</div>}
    </div>
  );
}
