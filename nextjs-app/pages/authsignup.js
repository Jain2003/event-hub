import React, { useState } from 'react';
import styles from '../styles/Auth.module.css';

const AuthPage = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      {/* Auth Card */}
      <div className={styles.authCard}>
        <h2 className={styles.authTitle}>Sign Up</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className={styles.inputField}
        />

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          className={styles.inputField}
        />

        {/* Password Input with Toggle */}
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className={styles.inputField}
          />
          <button 
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.toggleButton}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Submit Button */}
        <button className={styles.submitButton}>
          Submit
        </button>

        {/* Forget Password Link */}
        <a href="#" className={styles.forgetPassword}>
          Forget Password?
        </a>
      </div>
    </div>
  );
};

export default AuthPage;
