import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  function update(k, v) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setMsg("✅ Registered successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000); // redirect after 2 seconds
      } else {
        setMsg("⚠️ " + (data.msg || "Registration failed"));
      }
    } catch (err) {
      console.error(err);
      setMsg("❌ Server error. Please try again later.");
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form className="card" onSubmit={onSubmit}>
        <label>Name<input value={form.name} onChange={e => update("name", e.target.value)} /></label>
        <label>Email<input value={form.email} onChange={e => update("email", e.target.value)} /></label>
        <label>Password<input type="password" value={form.password} onChange={e => update("password", e.target.value)} /></label>
        <button style={{ marginTop: 10 }}>Create Account</button>
      </form>
      {msg && <div style={{ marginTop: 10 }}>{msg}</div>}
    </div>
  );
}
