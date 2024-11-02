import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css';
import { Eye, EyeOff } from 'lucide-react';


const LogoWithIcon = () => {
  const router = useRouter();

  // Handler to navigate to the home page
  const handleLogoClick = () => {
    router.push('/');
  };
  
  return (
    <h1 className={styles.logo}  onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
      <span>Event</span>
      <span>Hub</span>
    </h1>
  );
};

const AuthPage = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Initialize router for navigation

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handler to navigate to the signup page
  const handleLoginClick = () => {
    router.push('/authlogin');
  };

  const handleCreateAccount = () => {
    router.push('/authsignup');
  };

  return (
    <div className={styles.container}>
    {/* Header */}
    <header className={styles.header}>
        <div className={styles.headerContent}>
          <LogoWithIcon />
          <button 
            className={styles.signInButton} 
            onClick={handleLoginClick}  // Add the click handler here
          >
            👤 Login In
          </button>
        </div>
      </header>
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
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Submit Button */}
        <button className={styles.submitButton}>Submit</button>

        {/* Forget Password Link */}
        <a href="#" className={styles.forgetPassword}>
          Forget Password?
        </a>

        {/* For create account section */}
<div className={styles.createAccountSection}>
  <span className={styles.createAccountText}>Don't have an account?</span>
  <button className={styles.createAccountButton} onClick={handleCreateAccount}>Create one</button>
</div>
      </div>
    </div>
  );
};

export default AuthPage;
