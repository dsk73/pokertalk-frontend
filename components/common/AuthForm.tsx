"use client";

import React, { useState } from "react";
import styles from "@/styles/common/authForm.module.css";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const toggleForm = () => setIsLogin((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in:", formData);
    } else {
      console.log("Signing up:", formData);
    }
  };

  return (
    <div className={`${styles.authContainer}`}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>{isLogin ? "Login" : "Sign Up"}</h2>

        {!isLogin && (
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className={styles.toggleText}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleForm} className={styles.toggleLink}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
