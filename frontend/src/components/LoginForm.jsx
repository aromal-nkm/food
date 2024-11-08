import React, { useState } from "react";
import axios from "../services/api";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/admin/login", credentials);
      alert("Login successful!");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
    margin: "auto",
  },
};

export default LoginForm;
