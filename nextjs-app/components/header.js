import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import LogoWithIcon from './logo';

const Header = () => {
  const router = useRouter();

  // Handler to navigate to the auth sign-in page
  const handleLoginClick = () => {
    router.push('/authlogin');
  };

  return (
    <div>
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
    </div>
  );
};

export default Header;

