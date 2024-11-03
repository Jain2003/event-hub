import React, { useState } from 'react';
import styles from '../styles/Auth.module.css';
import { useRouter } from 'next/router';
import { Eye, EyeOff } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer'

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
      <Header/>
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
      <Footer/>
    </div>
  );
};

export default AuthPage;
