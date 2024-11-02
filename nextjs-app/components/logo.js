import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

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

  export default LogoWithIcon