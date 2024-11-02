import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
// import '../styles/global.css'


const HomePage = () => {
  const router = useRouter();

  const handleExploreEvents = () => {
    router.push('/explore');
  };

  const handleCreateEvent = () => {
    router.push('/create')
  }

  return (
    <div className={styles.container}>
      <Header/>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h2 className={styles.title}>
            What brings you here today? 🎉
          </h2>

          <div className={styles.cardContainer}>
            {/* Host Events Card */}
            <div className={`${styles.card} ${styles.hostCard}`} onClick={handleCreateEvent}>
              <h3 className={styles.cardTitle}>
                Host Events ✨
              </h3>
              <p className={styles.cardDescription}>
                Create and manage your own events. Share memorable experiences with others!
              </p>
            </div>

            {/* Participate Card */}
            <div className={`${styles.card} ${styles.participateCard}`} onClick={handleExploreEvents}>
              <h3 className={styles.cardTitle}>
                Explore Events 🎪
              </h3>
              <p className={styles.cardDescription}>
                Join exciting events near you. Meet new people and have fun!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
