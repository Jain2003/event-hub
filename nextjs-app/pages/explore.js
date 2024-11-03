import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Explore.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { events, getEventCategories } from '../temp-data/data';
const ExplorePage = () => {

    const router = useRouter();
    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      };

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.pageHeader}>
            <h1 className={styles.title}>Upcoming Events</h1>
            <div className={styles.filters}>
              <input
                type="text"
                placeholder="Search events..."
                className={styles.searchInput}
              />
              <select className={styles.categoryFilter}>
                <option value="">All Categories</option>
                <option value="music">Music</option>
                <option value="technology">Technology</option>
                <option value="food">Food</option>
                <option value="art">Art</option>
              </select>
            </div>
          </div>

          <div className={styles.eventGrid}>
            {events.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventCategory}>{event.category}</div>
                <h3 className={styles.eventTitle}>{event.name}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
                <div className={styles.eventDetails}>
                  <div className={styles.detail}>
                    <Calendar size={16} />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className={styles.detail}>
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className={styles.detail}>
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button 
  className={styles.registerButton}
  onClick={() => router.push(`/event/${event.id}`)}
>
  Register Now
</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExplorePage;
