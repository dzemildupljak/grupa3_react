import axios from "axios";
import React, { useState } from "react";
import "./Register.css";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const regUser = async (e) => {
    e.preventDefault();
    await axios.post("https://centarnitbe.herokuapp.com/user/", user);
    setUser({
      name: "",
      email: "",
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <form onSubmit={(e) => regUser(e)} className="register-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="uername">Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Register user</button>
      </form>
    </div>
  );
}
