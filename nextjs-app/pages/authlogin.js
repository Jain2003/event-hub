import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css';

const AuthPage = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Initialize router for navigation

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handler to navigate to the signup page
  const handleCreateAccount = () => {
    router.push('/authsignup');
  };

  return (
    <div className={styles.container}>
      {/* Auth Card */}
      <div className={styles.authCard}>
        <h2 className={styles.authTitle}>Login</h2>

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
        <button className={styles.submitButton}>Submit</button>

        {/* Forget Password Link */}
        <a href="#" className={styles.forgetPassword}>
          Forget Password?
        </a>

        {/* Create Account Link */}
        <p className={styles.createAccount}>
          Don't have an account?{' '}
          <button onClick={handleCreateAccount} className={styles.createAccountButton}>
            Create one
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
