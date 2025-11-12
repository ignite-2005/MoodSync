import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  function update(k, v) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        // Store token (optional, for protected routes)
        localStorage.setItem("token", data.token);
        setMsg("✅ Login successful! Redirecting...");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setMsg("⚠️ " + (data.msg || "Invalid credentials"));
      }
    } catch (err) {
      console.error("Login error:", err);
      setMsg("❌ Server error. Please try again.");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="card" onSubmit={onSubmit}>
        <label>
          Email
          <input
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
          />
        </label>
        <button style={{ marginTop: 10 }}>Login</button>
      </form>
      {msg && <div style={{ marginTop: 10 }}>{msg}</div>}
    </div>
  );
}
