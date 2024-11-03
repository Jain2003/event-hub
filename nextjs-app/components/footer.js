import React from 'react';
import { Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <div>
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
              <h4 className={styles.footerTitle}>Connect With Us</h4>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}>
                  <Twitter size={20} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <Instagram size={20} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <Linkedin size={20} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <MessageCircle size={20} />
                </a>
              </div>
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

export default Footer;