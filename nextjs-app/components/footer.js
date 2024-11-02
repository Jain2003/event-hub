import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';


const Footer = ()=>{

    return(
        <div>
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

export default Footer