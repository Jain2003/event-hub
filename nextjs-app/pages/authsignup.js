import React, { useState } from 'react';
import styles from '../styles/Auth.module.css';
import { useRouter } from 'next/router';
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

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  // Handler to navigate to the auth sign-in page
  const handleLoginClick = () => {
    router.push('/authlogin');
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
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Submit Button */}
        <button className={styles.submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
