import React, { useState } from "react";

import "./SignIn.css";

export default function EnhancedAuthPage() {
  const [mode, setMode]      = useState("login");
  const [forgot, setForgot]  = useState(false);
  const [form, setForm]      = useState({ fullName: "", email: "", phone: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (mode === "login") {
      if (forgot) {
        alert(`Password reset link sent to ${form.email}`);
        setForgot(false);
      } else {
        alert(`Logging in ${form.email}`);
      }
    } else {
      alert(`Signing up ${form.fullName}`);
    }
  };

  return (
    <div className="auth-page-container">
  
      <div className="auth-card">
        <div className="left-panel">
        
          <h2 className="slogan">Make Every Mile a Memory</h2>
          <ul className="features">
            <li>🌄 Scenic Curated Routes</li>
            <li>🚘 Luxury & Adventure Fleet</li>
            <li>🏨 Stay & Meal Booking</li>
            <li>🛡 24/7 on‑road Support</li>
            <li>🧳 Custom Travel Experiences</li>
          </ul>
        </div>

        <div className="right-panel">
          <div className="mode-toggle">
            <button
              className={mode === "login" && !forgot ? "active" : ""}
              onClick={() => { setMode("login"); setForgot(false); }}
            >Login</button>
            <button
              className={mode === "signup" ? "active" : ""}
              onClick={() => { setMode("signup"); setForgot(false); }}
            >Sign Up</button>
          </div>

          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            )}
            {(mode === "signup" || forgot || mode === "login") && (
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            )}

            {mode === "signup" && (
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            )}

            {!forgot && (
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required={mode !== "login"}
              />
            )}

            <div className="options-row">
              {mode === "login" && (
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setForgot(true)}
                >
                  Forgot Password?
                </button>
              )}
            </div>

            <button type="submit" className="submit-btn">
              {forgot 
                ? "Reset Password" 
                : mode === "login" 
                  ? "Login" 
                  : "Sign Up"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
