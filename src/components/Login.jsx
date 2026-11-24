
import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      setError("Invalid username or password!");
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Student Portal</h1>
        <p>Welcome! Please login to continue.</p>

        <form onSubmit={handleLogin}>

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </div>

          <button type="submit">Login</button>

          {error && <p className="error">{error}</p>}

        </form>

        <p className="login-footer">
          Student Management System © 2026
        </p>

      </div>
    </div>
  );
}

export default Login;
