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

const HomePage = () => {
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

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h2 className={styles.title}>
            What brings you here today? 🎉
          </h2>

          <div className={styles.cardContainer}>
            {/* Host Events Card */}
            <div className={`${styles.card} ${styles.hostCard}`}>
              <h3 className={styles.cardTitle}>
                Host Events ✨
              </h3>
              <p className={styles.cardDescription}>
                Create and manage your own events. Share memorable experiences with others!
              </p>
            </div>

            {/* Participate Card */}
            <div className={`${styles.card} ${styles.participateCard}`}>
              <h3 className={styles.cardTitle}>
                Participate in Events 🎪
              </h3>
              <p className={styles.cardDescription}>
                Join exciting events near you. Meet new people and have fun!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>About Us</h4>
              <p className={styles.footerText}>
                Making events more accessible and fun for everyone!
              </p>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li>How it works</li>
                <li>Safety Guidelines</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Connect With Us</h4>
              <p className={styles.footerText}>
                Follow us on social media for updates!
              </p>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>© 2024 EventHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
