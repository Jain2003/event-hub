import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Explore.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { Calendar, Clock, MapPin } from 'lucide-react';

const ExplorePage = () => {
  // Sample events data - in a real app, this would come from an API
  const events = [
    {
      id: 1,
      name: "Summer Music Festival",
      description: "Join us for an incredible day of live music performances featuring local and international artists.",
      date: "2024-06-15",
      time: "14:00",
      location: "Central Park",
      category: "Music"
    },
    {
      id: 2,
      name: "Tech Conference 2024",
      description: "Explore the latest innovations in technology with industry leaders and experts.",
      date: "2024-07-20",
      time: "09:00",
      location: "Convention Center",
      category: "Technology"
    },
    {
      id: 3,
      name: "Food & Wine Festival",
      description: "Experience a culinary journey with premium wines and gourmet food from top chefs.",
      date: "2024-06-30",
      time: "16:00",
      location: "Downtown Square",
      category: "Food"
    },
    {
      id: 4,
      name: "Art Exhibition Opening",
      description: "Witness the unveiling of contemporary artworks from emerging local artists.",
      date: "2024-06-22",
      time: "18:30",
      location: "Modern Art Gallery",
      category: "Art"
    }
  ];

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
                <button className={styles.registerButton}>Register Now</button>
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
